import { Schema, model, models } from 'mongoose';

const PropertySchema = new Schema({
  title:       { type: String, required: true },
  description: { type: String },
  price:       { type: Number, required: true },
  address:     { type: String, required: true },
  city:        { type: String, required: true },
  bedrooms:    { type: Number },
  bathrooms:   { type: Number },
  sqft:        { type: Number },
  type:        { type: String, enum: ['house', 'condo', 'townhouse', 'land'], default: 'house' },
  status:      { type: String, enum: ['for-sale', 'sold', 'pending'], default: 'for-sale' },
  images:      [{ type: String }],
  mlsId:       { type: String },
  isFeatured:  { type: Boolean, default: false },
  createdAt:   { type: Date, default: Date.now },
});

export const Property = models.Property || model('Property', PropertySchema);
