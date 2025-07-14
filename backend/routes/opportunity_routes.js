const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createOpportunity, getOpportunities } = require('../controllers/opportunity_controller');

// Create a new opportunity submission
router.post('/', auth, createOpportunity);

// Get all opportunity submissions (admin only)
router.get('/', auth, getOpportunities);

module.exports = routeaconst express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createOpportunity,
  getOpportunities,
  updateOpportunityStatus,
} = require('../controllers/opportunity_controller');

// Create a new volunteer opportunity submission
router.post('/', auth, createOpportunity);

// Get all opportunity submissions (admin only)
router.get('/', auth, getOpportunities);

// Update opportunity status (approve/reject, admin only)
router.put('/:id/status', auth, updateOpportunityStatus);

module.exports = router;
