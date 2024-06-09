import { testimonialModel } from './testimonials.model';

const getAllTestimonials = async () => {
  const result = await testimonialModel.find();
  return result;
};

export const testimonialService = {
  getAllTestimonials,
};
