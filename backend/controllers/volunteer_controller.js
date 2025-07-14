const Volunteer = require('../models/Volunteer');

// GET all volunteers
exports.getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json(volunteers);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// GET a single volunteer by ID
exports.getVolunteerById = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }
    res.status(200).json(volunteer);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// POST create a new volunteer
exports.createVolunteer = async (req, res) => {
  try {
    const { name, email, phone, skills, availability, status } = req.body;

    const existingVolunteer = await Volunteer.findOne({ email });
    if (existingVolunteer) {
      return res.status(400).json({ message: 'Volunteer with this email already exists' });
    }

    const volunteer = new Volunteer({
      name,
      email,
      phone,
      skills,
      availability,
      status
    });

    await volunteer.save();
    res.status(201).json(volunteer);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// PUT update a volunteer by ID
exports.updateVolunteer = async (req, res) => {
  try {
    const { name, email, phone, skills, availability, status } = req.body;

    let volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }

    volunteer.name = name || volunteer.name;
    volunteer.email = email || volunteer.email;
    volunteer.phone = phone || volunteer.phone;
    volunteer.skills = skills || volunteer.skills;
    volunteer.availability = availability || volunteer.availability;
    volunteer.status = status || volunteer.status;

    await volunteer.save();
    res.status(200).json(volunteer);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// DELETE a volunteer by ID
exports.deleteVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }

    await volunteer.remove();
    res.status(200).json({ message: 'Volunteer removed successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
