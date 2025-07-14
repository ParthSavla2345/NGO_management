const Donor = require('../models/Donor');
const Donation = require('../models/Donation');

// Get all donors
exports.getDonors = async (req, res) => {
  try {
    const donors = await Donor.find().sort({ firstDonationDate: -1 });
    res.json(donors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get donor by ID
exports.getDonorById = async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);
    
    if (!donor) {
      return res.status(404).json({ message: 'Donor not found' });
    }
    
    res.json(donor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create donor
exports.createDonor = async (req, res) => {
  try {
    const { name, email, phone, address, donationType, notes } = req.body;
    
    // Check if donor exists
    let donor = await Donor.findOne({ email });
    if (donor) {
      return res.status(400).json({ message: 'Donor already exists' });
    }
    
    // Create new donor
    donor = new Donor({
      name,
      email,
      phone,
      address,
      donationType,
      notes
    });
    
    await donor.save();
    res.status(201).json(donor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update donor
exports.updateDonor = async (req, res) => {
  try {
    const { name, email, phone, address, donationType, notes } = req.body;
    
    let donor = await Donor.findById(req.params.id);
    if (!donor) {
      return res.status(404).json({ message: 'Donor not found' });
    }
    
    // Update fields
    donor.name = name || donor.name;
    donor.email = email || donor.email;
    donor.phone = phone || donor.phone;
    donor.address = address || donor.address;
    donor.donationType = donationType || donor.donationType;
    donor.notes = notes || donor.notes;
    
    await donor.save();
    res.json(donor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get donor donations
exports.getDonorDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ donor: req.params.id })
      .sort({ date: -1 });
    
    res.json(donations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};