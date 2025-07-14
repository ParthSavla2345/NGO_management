const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('../controllers/auth_controller.js');
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth.js');

// Validation middleware for register
const validateRegister = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('confirm_password')
    .notEmpty()
    .withMessage('Confirm password is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }
    next();
  },
];

// POST /api/auth/register
router.post('/register', validateRegister, register);

// POST /api/auth/login
router.post('/login', login);

// GET /api/auth/me
router.get('/me', auth, getMe);

module.exports = router;