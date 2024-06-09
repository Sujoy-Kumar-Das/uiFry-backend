import { Schema, model } from 'mongoose';
import { ITestimonial } from './testimonials.interface';

const testimonialSchema = new Schema<ITestimonial>({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  feedback: {
    type: String,
    required: [true, 'Feedback is required.'],
  },
  title: {
    type: String,
    required: [true, 'Title is required.'],
  },
  image: {
    type: String,
    required: [true, 'Image is required.'],
  },
});

export const testimonialModel = model<ITestimonial>(
  'testimonial',
  testimonialSchema,
);
