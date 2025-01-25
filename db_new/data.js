const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "eventseeker", "organizer"], default: "eventseeker" },
  createdAt: { type: Date, default: Date.now },
});

// EventSeeker Schema
const eventSeekerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  interests: { type: [String], default: [] },
  registeredEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
  bio: { type: String, default: "" },
});

// Event Schema
const eventSchema = new mongoose.Schema({
  organizationName: { type: String, required: true },
  location: { type: String, required: true },
  connectType: { type: String, enum: ["COMMUNITY CONNECT", "CORPORATE CONNECT", "DEFENCE CONNECT", "MEDICAL CONNECT", "SCHOOL CONNECT", 
    "NGOsCONNECT", "VILLAGE CONNECT", "OTHER"], required: true },
  hfnConnectorName: { type: String, required: true },
  organisation_coordinator: { type: String, required: true },
  organisation_email: { type: String, required: true},
  cordinator_mobilenumber: {type: Number, required: true},
  sessionDates: {
    start: { type: Date, required: true },
    end: { type: Date, required: true },
  },
  createdAt: { type: Date, default: Date.now },
});

// Models
const User = mongoose.model("User", userSchema);
const EventSeeker = mongoose.model("EventSeeker", eventSeekerSchema);
const Event = mongoose.model("Event", eventSchema);

// Exporting Models
module.exports = { User, EventSeeker, Event };
