const mongoose = require('mongoose');

const opportunitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    enum: ['volunteer', 'donate'],
    required: true,
  },
  availability: {
    type: String,
    trim: true,
    required: function() { return this.type === 'volunteer'; },
  },
  amount: {
    type: Number,
    min: 0,
    required: function() { return this.type === 'donate'; },
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Opportunity', opportunitySchema);