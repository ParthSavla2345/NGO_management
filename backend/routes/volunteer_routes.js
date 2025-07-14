const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createVolunteer, getVolunteers } = require('../controllers/volunteer_controller');

// Create a new volunteer (admin only)
router.post('/', auth, createVolunteer);

// Get all volunteers (admin only)
router.get('/', auth, getVolunteers);

module.exports = router;