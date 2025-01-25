// Import mongoose
const mongoose = require('mongoose');

// Define the schema for new seekers
const seekerSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  orgName: { type: String, required: true },
  orgLocation: { type: String, required: true },
  connectName: { type: String, required: true },
  coordinatorName: { type: String, required: true },
  sessionDates: {
    start: { type: Date, required: true },
    end: { type: Date, required: true },
  },
  trainerName: { type: String, required: true },
  volunteers: [{ type: String }], // Array of volunteer names
  phoneNumber: { type: String, required: true },
  emailAddress: { type: String, required: true, unique: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  occupation: { type: String, required: false } // Occupation field
});

// Create the model
const Seeker = mongoose.model('Seeker', seekerSchema);

// Export the model
module.exports = Seeker;
