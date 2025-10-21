from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
import json
import os
from datetime import timedelta

app = Flask(__name__, static_folder='../dist', static_url_path='')

# Configuration
app.config['JWT_SECRET_KEY'] = 'arx-protection-super-secret-key-2025'  # Change in production
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=24)

# Initialize extensions
CORS(app, resources={r"/api/*": {"origins": "*"}})
jwt = JWTManager(app)

# Database file path
USERS_FILE = os.path.join(os.path.dirname(__file__), '..', 'api', 'users.json')

# Helper functions
def load_users():
    """Load users from JSON file"""
    try:
        with open(USERS_FILE, 'r') as f:
            data = json.load(f)
            # Handle both array and object with users key
            if isinstance(data, dict) and 'users' in data:
                return data['users']
            return data if isinstance(data, list) else []
    except FileNotFoundError:
        return []
    except Exception as e:
        print(f"Error loading users: {e}")
        return []

def save_users(users):
    """Save users to JSON file"""
    try:
        with open(USERS_FILE, 'w') as f:
            json.dump({'users': users}, f, indent=2)
    except Exception as e:
        print(f"Error saving users: {e}")

def hash_password(password):
    """Hash a password using werkzeug"""
    return generate_password_hash(password, method='pbkdf2:sha256')

def verify_password(password, hashed):
    """Verify a password against a hash - supports both bcrypt and werkzeug"""
    # Try werkzeug first
    if hashed.startswith('pbkdf2:'):
        return check_password_hash(hashed, password)
    
    # Fallback to bcrypt for existing passwords
    try:
        import bcrypt
        return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8'))
    except:
        return False

def get_user_by_username(username):
    """Get user by username"""
    try:
        users = load_users()
        for user in users:
            if isinstance(user, dict) and user.get('username') == username:
                return user
        return None
    except Exception as e:
        print(f"Error in get_user_by_username: {e}")
        return None

def get_user_by_id(user_id):
    """Get user by ID"""
    try:
        users = load_users()
        for user in users:
            if isinstance(user, dict) and str(user.get('id')) == str(user_id):
                return user
        return None
    except Exception as e:
        print(f"Error in get_user_by_id: {e}")
        return None

# Routes

# Serve React App
@app.route('/')
def serve_react_app():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_react_routes(path):
    if path.startswith('api/'):
        return jsonify({'error': 'Not found'}), 404
    
    file_path = os.path.join(app.static_folder, path)
    if os.path.exists(file_path) and os.path.isfile(file_path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# Authentication Routes
@app.route('/api/auth/login', methods=['POST'])
def login():
    """Login endpoint"""
    try:
        data = request.get_json()
        
        if not data or 'username' not in data or 'password' not in data:
            return jsonify({'error': 'Username and password required'}), 400
        
        username = data['username']
        password = data['password']
        
        user = get_user_by_username(username)
        
        if not user:
            return jsonify({'error': 'Invalid credentials'}), 401
        
        if user.get('status') == 'inactive':
            return jsonify({'error': 'Account is inactive. Please contact administrator.'}), 403
        
        if not verify_password(password, user['password']):
            return jsonify({'error': 'Invalid credentials'}), 401
        
        # Create access token
        access_token = create_access_token(identity=str(user['id']))
        
        # Return user data without password
        user_data = {k: v for k, v in user.items() if k != 'password'}
        
        return jsonify({
            'token': access_token,
            'user': user_data
        }), 200
    except Exception as e:
        print(f"Login error: {e}")
        import traceback
        traceback.print_exc()
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/auth/verify', methods=['GET'])
@jwt_required()
def verify_token():
    """Verify JWT token"""
    try:
        user_id = get_jwt_identity()
        user = get_user_by_id(user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        if user.get('status') == 'inactive':
            return jsonify({'error': 'Account is inactive'}), 403
        
        return jsonify({'valid': True}), 200
    except Exception as e:
        print(f"Verify error: {e}")
        return jsonify({'error': 'Invalid token'}), 401

@app.route('/api/auth/me', methods=['GET'])
@jwt_required()
def get_current_user():
    """Get current user information"""
    try:
        user_id = get_jwt_identity()
        user = get_user_by_id(user_id)
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        user_data = {k: v for k, v in user.items() if k != 'password'}
        return jsonify(user_data), 200
    except Exception as e:
        print(f"Get user error: {e}")
        return jsonify({'error': 'Internal server error'}), 500

# Admin Routes
@app.route('/api/admin/users', methods=['GET'])
@jwt_required()
def get_all_users():
    """Get all users (admin only)"""
    try:
        user_id = get_jwt_identity()
        current_user = get_user_by_id(user_id)
        
        if not current_user or current_user.get('role') not in ['admin', 'manager', 'supervisor']:
            return jsonify({'error': 'Unauthorized'}), 403
        
        users = load_users()
        users_data = [{k: v for k, v in user.items() if k != 'password'} for user in users if isinstance(user, dict)]
        
        return jsonify(users_data), 200
    except Exception as e:
        print(f"Get all users error: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/admin/users', methods=['POST'])
@jwt_required()
def create_user():
    """Create new user (admin only)"""
    try:
        user_id = get_jwt_identity()
        current_user = get_user_by_id(user_id)
        
        if not current_user or current_user.get('role') not in ['admin', 'manager', 'supervisor']:
            return jsonify({'error': 'Unauthorized'}), 403
        
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['username', 'password', 'firstName', 'lastName', 'email', 'employeeId', 'role', 'department']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400
        
        # Check if username already exists
        if get_user_by_username(data['username']):
            return jsonify({'error': 'Username already exists'}), 400
        
        users = load_users()
        
        # Generate new user ID
        max_id = max([int(user.get('id', 0)) for user in users if isinstance(user, dict)]) if users else 0
        new_id = str(max_id + 1)
        
        # Create new user
        new_user = {
            'id': new_id,
            'username': data['username'],
            'password': hash_password(data['password']),
            'firstName': data['firstName'],
            'lastName': data['lastName'],
            'email': data['email'],
            'employeeId': data['employeeId'],
            'role': data['role'],
            'department': data['department'],
            'status': 'active'
        }
        
        users.append(new_user)
        save_users(users)
        
        user_data = {k: v for k, v in new_user.items() if k != 'password'}
        return jsonify(user_data), 201
    except Exception as e:
        print(f"Create user error: {e}")
        import traceback
        traceback.print_exc()
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/admin/users/<user_id>', methods=['PUT'])
@jwt_required()
def update_user(user_id):
    """Update user (admin only)"""
    try:
        current_user_id = get_jwt_identity()
        current_user = get_user_by_id(current_user_id)
        
        if not current_user or current_user.get('role') not in ['admin', 'manager', 'supervisor']:
            return jsonify({'error': 'Unauthorized'}), 403
        
        data = request.get_json()
        users = load_users()
        
        user_index = None
        for i, user in enumerate(users):
            if isinstance(user, dict) and str(user.get('id')) == str(user_id):
                user_index = i
                break
        
        if user_index is None:
            return jsonify({'error': 'User not found'}), 404
        
        # Update user fields
        if 'username' in data:
            users[user_index]['username'] = data['username']
        if 'firstName' in data:
            users[user_index]['firstName'] = data['firstName']
        if 'lastName' in data:
            users[user_index]['lastName'] = data['lastName']
        if 'email' in data:
            users[user_index]['email'] = data['email']
        if 'employeeId' in data:
            users[user_index]['employeeId'] = data['employeeId']
        if 'role' in data:
            users[user_index]['role'] = data['role']
        if 'department' in data:
            users[user_index]['department'] = data['department']
        
        save_users(users)
        
        user_data = {k: v for k, v in users[user_index].items() if k != 'password'}
        return jsonify(user_data), 200
    except Exception as e:
        print(f"Update user error: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/admin/users/<user_id>', methods=['DELETE'])
@jwt_required()
def deactivate_user(user_id):
    """Deactivate user (admin only)"""
    try:
        current_user_id = get_jwt_identity()
        current_user = get_user_by_id(current_user_id)
        
        if not current_user or current_user.get('role') not in ['admin', 'manager', 'supervisor']:
            return jsonify({'error': 'Unauthorized'}), 403
        
        if str(current_user_id) == str(user_id):
            return jsonify({'error': 'Cannot deactivate your own account'}), 400
        
        users = load_users()
        
        user_index = None
        for i, user in enumerate(users):
            if isinstance(user, dict) and str(user.get('id')) == str(user_id):
                user_index = i
                break
        
        if user_index is None:
            return jsonify({'error': 'User not found'}), 404
        
        users[user_index]['status'] = 'inactive'
        save_users(users)
        
        return jsonify({'message': 'User deactivated successfully'}), 200
    except Exception as e:
        print(f"Deactivate user error: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/admin/users/<user_id>/activate', methods=['POST'])
@jwt_required()
def activate_user(user_id):
    """Activate user (admin only)"""
    try:
        current_user_id = get_jwt_identity()
        current_user = get_user_by_id(current_user_id)
        
        if not current_user or current_user.get('role') not in ['admin', 'manager', 'supervisor']:
            return jsonify({'error': 'Unauthorized'}), 403
        
        users = load_users()
        
        user_index = None
        for i, user in enumerate(users):
            if isinstance(user, dict) and str(user.get('id')) == str(user_id):
                user_index = i
                break
        
        if user_index is None:
            return jsonify({'error': 'User not found'}), 404
        
        users[user_index]['status'] = 'active'
        save_users(users)
        
        user_data = {k: v for k, v in users[user_index].items() if k != 'password'}
        return jsonify(user_data), 200
    except Exception as e:
        print(f"Activate user error: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/admin/users/<user_id>/reset-password', methods=['POST'])
@jwt_required()
def reset_password(user_id):
    """Reset user password (admin only)"""
    try:
        current_user_id = get_jwt_identity()
        current_user = get_user_by_id(current_user_id)
        
        if not current_user or current_user.get('role') not in ['admin', 'manager', 'supervisor']:
            return jsonify({'error': 'Unauthorized'}), 403
        
        data = request.get_json()
        
        if 'newPassword' not in data:
            return jsonify({'error': 'New password required'}), 400
        
        if len(data['newPassword']) < 6:
            return jsonify({'error': 'Password must be at least 6 characters'}), 400
        
        users = load_users()
        
        user_index = None
        for i, user in enumerate(users):
            if isinstance(user, dict) and str(user.get('id')) == str(user_id):
                user_index = i
                break
        
        if user_index is None:
            return jsonify({'error': 'User not found'}), 404
        
        users[user_index]['password'] = hash_password(data['newPassword'])
        save_users(users)
        
        return jsonify({'message': 'Password reset successfully'}), 200
    except Exception as e:
        print(f"Reset password error: {e}")
        return jsonify({'error': 'Internal server error'}), 500

# Course Registration (existing endpoint)
@app.route('/api/register-course', methods=['POST'])
def register_course():
    """Course registration endpoint"""
    try:
        data = request.get_json()
        # Here you would typically save to database
        # For now, just return success
        return jsonify({
            'success': True,
            'message': 'Registration received successfully'
        }), 200
    except Exception as e:
        print(f"Course registration error: {e}")
        return jsonify({'error': 'Internal server error'}), 500

# Error handlers
@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')

@app.errorhandler(500)
def internal_error(e):
    print(f"500 error: {e}")
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    # Ensure api directory exists
    os.makedirs('api', exist_ok=True)
    
    # Run the app
    app.run(host='0.0.0.0', port=5000, debug=False)

