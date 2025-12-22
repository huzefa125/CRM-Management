import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['cold', 'warm', 'hot', 'won', 'lost'],
    default: 'cold'
  },
  source: {
    type: String,
    enum: ['website', 'referral', 'social', 'campaign', 'other'],
    default: 'website'
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true
  },
  notes: String,
  value: {
    type: Number,
    default: 0
  },
  lastContactDate: Date,
  nextFollowUp: Date
}, {
  timestamps: true
});

leadSchema.index({ schoolId: 1, status: 1 });
leadSchema.index({ email: 1 });

export default mongoose.model('Lead', leadSchema);