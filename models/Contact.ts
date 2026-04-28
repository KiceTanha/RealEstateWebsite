import { Schema, model, models } from 'mongoose';

const ContactSchema = new Schema({
  name:      { type: String, required: true },
  email:     { type: String, required: true },
  phone:     { type: String },
  message:   { type: String, required: true },
  type:      { type: String, enum: ['buyer', 'seller', 'general'], default: 'general' },
  createdAt: { type: Date, default: Date.now },
});

export const Contact = models.Contact || model('Contact', ContactSchema);
