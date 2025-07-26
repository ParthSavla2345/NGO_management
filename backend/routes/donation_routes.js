const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');
const donationController = require('../controllers/donation_controller');

router.post('/', auth, donationController.validateDonation, donationController.makeDonation);
router.get('/', auth, donationController.getUserDonations);
router.get('/all', auth, isAdmin, donationController.getAllDonations);

module.exports = router;