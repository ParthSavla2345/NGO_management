const Donation = require('../models/Donation');
const Campaign = require('../models/Campaign');
const { body, validationResult } = require('express-validator');

exports.validateDonation = [
  body('amount').isFloat({ min: 1 }).withMessage('Amount must be at least $1'),
  body('campaignId')
    .optional()
    .isMongoId()
    .withMessage('Invalid campaign ID'),
];

exports.makeDonation = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { amount, campaignId } = req.body;
  const userId = req.user.id;

  try {
    // Mock payment processing
    const paymentSuccess = true; // Replace with real payment gateway (e.g., Stripe)
    if (!paymentSuccess) {
      return res.status(400).json({ message: 'Payment failed' });
    }

    const donation = new Donation({
      userId,
      amount,
      campaignId: campaignId || null,
    });

    if (campaignId) {
      const campaign = await Campaign.findById(campaignId);
      if (!campaign) {
        return res.status(404).json({ message: 'Campaign not found' });
      }
      campaign.raised += amount;
      await campaign.save();
    }

    await donation.save();
    res.status(201).json(donation);
  } catch (error) {
    console.error('Donation error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getUserDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ userId: req.user.id })
      .populate('userId', 'name')
      .populate('campaignId', 'title');
    res.json(donations);
  } catch (error) {
    console.error('Get user donations error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find()
      .populate('userId', 'name')
      .populate('campaignId', 'title');
    res.json(donations);
  } catch (error) {
    console.error('Get all donations error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};