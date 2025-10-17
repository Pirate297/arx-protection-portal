import json
from werkzeug.security import generate_password_hash

# Load users
with open('api/users.json', 'r') as f:
    data = json.load(f)
    users = data['users']

# Default password
default_password = 'ARX2025!'

# Rehash all passwords
for user in users:
    user['password'] = generate_password_hash(default_password, method='pbkdf2:sha256')
    print(f"Rehashed password for {user['username']}")

# Save
with open('api/users.json', 'w') as f:
    json.dump(data, f, indent=2)

print("\nAll passwords rehashed successfully!")
print(f"Default password: {default_password}")
