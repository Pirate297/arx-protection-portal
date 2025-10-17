import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// JWT Secret - In production, use environment variable
const JWT_SECRET = process.env.JWT_SECRET || 'arx-protection-secret-key-2025';
const JWT_EXPIRES_IN = '24h';

// Path to users database
const USERS_DB_PATH = path.join(__dirname, 'users.json');

/**
 * Load users from database
 */
export async function loadUsers() {
  try {
    const data = await fs.readFile(USERS_DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading users:', error);
    return { users: [] };
  }
}

/**
 * Save users to database
 */
export async function saveUsers(usersData) {
  try {
    await fs.writeFile(USERS_DB_PATH, JSON.stringify(usersData, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error saving users:', error);
    return false;
  }
}

/**
 * Find user by username
 */
export async function findUserByUsername(username) {
  const { users } = await loadUsers();
  return users.find(u => u.username.toLowerCase() === username.toLowerCase());
}

/**
 * Find user by ID
 */
export async function findUserById(id) {
  const { users } = await loadUsers();
  return users.find(u => u.id === id);
}

/**
 * Authenticate user
 */
export async function authenticateUser(username, password) {
  const user = await findUserByUsername(username);
  
  if (!user) {
    return { success: false, message: 'Invalid username or password' };
  }

  // Check if user is active
  if (user.status !== 'active') {
    return { success: false, message: 'Account is deactivated. Contact your supervisor.' };
  }

  // Verify password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  
  if (!isPasswordValid) {
    return { success: false, message: 'Invalid username or password' };
  }

  // Generate JWT token
  const token = jwt.sign(
    { 
      id: user.id, 
      username: user.username, 
      role: user.role 
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  // Return user data (without password)
  const { password: _, ...userWithoutPassword } = user;

  return {
    success: true,
    token,
    user: userWithoutPassword
  };
}

/**
 * Verify JWT token
 */
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

/**
 * Hash password
 */
export async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

/**
 * Create new user
 */
export async function createUser(userData) {
  const { users } = await loadUsers();
  
  // Check if username already exists
  const existingUser = users.find(u => u.username.toLowerCase() === userData.username.toLowerCase());
  if (existingUser) {
    return { success: false, message: 'Username already exists' };
  }

  // Check if email already exists
  const existingEmail = users.find(u => u.email.toLowerCase() === userData.email.toLowerCase());
  if (existingEmail) {
    return { success: false, message: 'Email already exists' };
  }

  // Generate new ID
  const newId = String(Math.max(...users.map(u => parseInt(u.id)), 0) + 1);

  // Hash password
  const hashedPassword = await hashPassword(userData.password);

  // Create new user
  const newUser = {
    id: newId,
    username: userData.username,
    password: hashedPassword,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    employeeId: userData.employeeId,
    role: userData.role || 'employee',
    department: userData.department,
    status: 'active',
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  await saveUsers({ users });

  const { password: _, ...userWithoutPassword } = newUser;
  return { success: true, user: userWithoutPassword };
}

/**
 * Update user
 */
export async function updateUser(userId, updates) {
  const { users } = await loadUsers();
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return { success: false, message: 'User not found' };
  }

  // If password is being updated, hash it
  if (updates.password) {
    updates.password = await hashPassword(updates.password);
  }

  // Update user
  users[userIndex] = { ...users[userIndex], ...updates };
  await saveUsers({ users });

  const { password: _, ...userWithoutPassword } = users[userIndex];
  return { success: true, user: userWithoutPassword };
}

/**
 * Delete user (soft delete by setting status to inactive)
 */
export async function deleteUser(userId) {
  const { users } = await loadUsers();
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return { success: false, message: 'User not found' };
  }

  // Soft delete - set status to inactive
  users[userIndex].status = 'inactive';
  await saveUsers({ users });

  return { success: true, message: 'User deactivated successfully' };
}

/**
 * Get all users (without passwords)
 */
export async function getAllUsers() {
  const { users } = await loadUsers();
  return users.map(({ password, ...user }) => user);
}

/**
 * Middleware to verify authentication
 */
export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.substring(7);
  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  req.user = decoded;
  next();
}

/**
 * Middleware to check if user has admin/manager/supervisor role
 */
export function adminMiddleware(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const allowedRoles = ['admin', 'manager', 'supervisor'];
  if (!allowedRoles.includes(req.user.role)) {
    return res.status(403).json({ error: 'Access denied. Admin privileges required.' });
  }

  next();
}

