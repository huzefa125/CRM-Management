import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  phone: String,
  address: String,
  city: String,
  country: {
    type: String,
    default: 'India'
  },
  logo: String,
  bannerImage: String,
  isActive: {
    type: Boolean,
    default: true
  },
  settings: {
    metaTitle: String,
    metaDescription: String,
    headerScript: String,
    bodyScript: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });
