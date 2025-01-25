// Import mongoose
const mongoose = require('mongoose');

// Define the schema for follow-up data
const followUpSchema = new mongoose.Schema({
  eventLocation: { type: String, required: true },
  sessionDate: { type: Date, required: true },
  numberOfParticipants: { type: Number, required: true },
  trainnerName: { type: String, required: true},
  volunteerName: {
    name1: { type: String, required: true},
    name2 : { type: String, required: true},
  },
  comments: { type: String, required: false } // Optional comments field
});

// Create the model
const FollowUp = mongoose.model('FollowUp', followUpSchema);

// Export the model
module.exports = FollowUp;