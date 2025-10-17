import express from 'express';
import cors from 'cors';
import {
  authenticateUser,
  verifyToken,
  authMiddleware,
  adminMiddleware,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  findUserById,
  hashPassword
} from './api/auth.js';

const app = express();
const PORT = 3001;

// Monday.com API configuration
const MONDAY_API_URL = 'https://api.monday.com/v2';
const MONDAY_API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjU3NDMxMzkxMCwiYWFpIjoxMSwidWlkIjo1NTk5Mjg4NiwiaWFkIjoiMjAyNS0xMC0xNVQxMzo1ODowMy42ODRaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjEzNDkyMzIsInJnbiI6InVzZTEifQ.SyH1wMKy5_4BeJSsK-BOAVIXhyUSFW2LBWW73UxcLnw';
const BOARD_ID = '8759982115';

app.use(cors());
app.use(express.json());

// ============================================
// AUTHENTICATION ROUTES
// ============================================

/**
 * POST /api/auth/login
 * Login endpoint
 */
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const result = await authenticateUser(username, password);

    if (!result.success) {
      return res.status(401).json({ message: result.message });
    }

    res.json({
      success: true,
      token: result.token,
      user: result.user
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

/**
 * GET /api/auth/verify
 * Verify token endpoint
 */
app.get('/api/auth/verify', authMiddleware, async (req, res) => {
  try {
    const user = await findUserById(req.user.id);
    
    if (!user || user.status !== 'active') {
      return res.status(401).json({ error: 'User not found or inactive' });
    }

    const { password, ...userWithoutPassword } = user;
    res.json({ valid: true, user: userWithoutPassword });
  } catch (error) {
    console.error('Verify error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * GET /api/auth/me
 * Get current user info
 */
app.get('/api/auth/me', authMiddleware, async (req, res) => {
  try {
    const user = await findUserById(req.user.id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ============================================
// ADMIN ROUTES (Protected)
// ============================================

/**
 * GET /api/admin/users
 * Get all users (admin only)
 */
app.get('/api/admin/users', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * POST /api/admin/users
 * Create new user (admin only)
 */
app.post('/api/admin/users', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { username, password, firstName, lastName, email, employeeId, role, department } = req.body;

    // Validate required fields
    if (!username || !password || !firstName || !lastName || !email || !employeeId || !department) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const result = await createUser({
      username,
      password,
      firstName,
      lastName,
      email,
      employeeId,
      role: role || 'employee',
      department
    });

    if (!result.success) {
      return res.status(400).json({ error: result.message });
    }

    res.status(201).json(result.user);
  } catch (error) {
    console.error('Create user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * PUT /api/admin/users/:id
 * Update user (admin only)
 */
app.put('/api/admin/users/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Don't allow updating id or createdAt
    delete updates.id;
    delete updates.createdAt;

    const result = await updateUser(id, updates);

    if (!result.success) {
      return res.status(404).json({ error: result.message });
    }

    res.json(result.user);
  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * DELETE /api/admin/users/:id
 * Deactivate user (admin only)
 */
app.delete('/api/admin/users/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    // Prevent deleting yourself
    if (id === req.user.id) {
      return res.status(400).json({ error: 'Cannot deactivate your own account' });
    }

    const result = await deleteUser(id);

    if (!result.success) {
      return res.status(404).json({ error: result.message });
    }

    res.json({ message: result.message });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * POST /api/admin/users/:id/activate
 * Reactivate user (admin only)
 */
app.post('/api/admin/users/:id/activate', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    const result = await updateUser(id, { status: 'active' });

    if (!result.success) {
      return res.status(404).json({ error: result.message });
    }

    res.json(result.user);
  } catch (error) {
    console.error('Activate user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * POST /api/admin/users/:id/reset-password
 * Reset user password (admin only)
 */
app.post('/api/admin/users/:id/reset-password', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { newPassword } = req.body;

    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    const result = await updateUser(id, { password: newPassword });

    if (!result.success) {
      return res.status(404).json({ error: result.message });
    }

    res.json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ============================================
// COURSE REGISTRATION ROUTE
// ============================================

app.post('/api/course-registration', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      preferredContact,
      occupation,
      howHeard,
      knowledgeLevel,
      courseName,
      sessionDate,
      sessionTime,
      sessionLocation
    } = req.body;

    // Create item name
    const itemName = `${lastName}, ${firstName} - ${courseName} (${sessionDate})`;

    // Prepare column values
    const columnValues = {
      text_mkpazmb6: firstName,
      email_mkpa21r9: { email: email, text: email },
      phone_mkpa1axh: { phone: phone, countryShortName: 'AW' },
      color_mkpacvnk: { label: preferredContact },
      text_mkpazsrt: occupation || '',
      color_mkpae3xj: { label: courseName },
      text_mkpad9mh: howHeard || '',
      color_mkpaqs25: { label: knowledgeLevel }
    };

    // GraphQL mutation
    const mutation = `
      mutation {
        create_item (
          board_id: ${BOARD_ID},
          item_name: "${itemName.replace(/"/g, '\\"')}",
          column_values: "${JSON.stringify(columnValues).replace(/"/g, '\\"')}"
        ) {
          id
        }
      }
    `;

    const response = await fetch(MONDAY_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': MONDAY_API_TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: mutation })
    });

    const data = await response.json();

    if (data.errors) {
      console.error('Monday.com API errors:', data.errors);
      return res.status(500).json({ error: 'Failed to create registration', details: data.errors });
    }

    res.json({
      success: true,
      message: 'Registration successful',
      mondayItemId: data.data.create_item.id
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
  console.log(`🚀 ARX Protection API server running on http://localhost:${PORT}`);
  console.log(`📝 Authentication endpoints available at /api/auth/*`);
  console.log(`👥 Admin endpoints available at /api/admin/*`);
});

