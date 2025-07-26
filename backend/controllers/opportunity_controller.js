const Opportunity = require('../models/Opportunity');
const Volunteer = require('../models/Volunteer');

// Create a new volunteer opportunity submission
exports.createOpportunity = async (req, res) => {
  try {
    const { availability } = req.body;
    const opportunity = new Opportunity({
      userId: req.user.id,
      type: 'volunteer',
      availability,
    });
    await opportunity.save();
    res.status(201).json(opportunity);
  } catch (error) {
    console.error('Create opportunity error:', error.message, error.stack);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all opportunity submissions (admin only)
exports.getOpportunities = async (req, res) => {
  try {
    if (req.user.role !== 1) {
      return res.status(403).json({ message: 'Admin access required' });
    }
    const opportunities = await Opportunity.find()
      .populate('userId', 'name email')
      .select('-__v');
    res.json(opportunities);
  } catch (error) {
    console.error('Get opportunities error:', error.message, error.stack);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update opportunity status (approve/reject, admin only)
exports.updateOpportunityStatus = async (req, res) => {
  try {
    if (req.user.role !== 1) {
      return res.status(403).json({ message: 'Admin access required' });
    }
    const { status } = req.body;
    if (!['approved', 'rejected'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }
    const opportunity = await Opportunity.findById(req.params.id);
    if (!opportunity) {
      return res.status(404).json({ message: 'Opportunity not found' });
    }
    opportunity.status = status;
    await opportunity.save();

    // If approved, create a Volunteer record
    if (status === 'approved') {
      const user = await opportunity.populate('userId', 'name email');
      await Volunteer.create({
        name: user.userId.name,
        email: user.userId.email,
        role: 'volunteer',
      });
    }

    res.json(opportunity);
  } catch (error) {
    console.error('Update opportunity status error:', error.message, error.stack);
    res.status(500).json({ message: 'Server Error' });
  }