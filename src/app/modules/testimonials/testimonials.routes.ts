import express from 'express';
import { testimonialController } from './testimonials.controller';
const route = express.Router();

route.get('/testimonial', testimonialController.getAllTestimonialController);

export const testimonialRoutes = route;
