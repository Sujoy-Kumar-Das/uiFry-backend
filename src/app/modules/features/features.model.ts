import { Schema, model } from 'mongoose';
import { IFeatures } from './features.interface';

const featuresModelSchema = new Schema<IFeatures>({
  title: {
    type: String,
    required: [true, 'Title is required.'],
  },
  description: {
    type: String,
    required: [true, 'Description is required.'],
  },
  image: {
    type: String,
    required: [true, 'Image is required.'],
  },
});

export const featuresModel = model<IFeatures>('features', featuresModelSchema);
