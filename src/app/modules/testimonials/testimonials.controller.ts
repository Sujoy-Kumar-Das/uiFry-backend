import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { testimonialService } from './testimonials.service';

const getAllTestimonialController = catchAsync(async (req, res) => {
  const result = await testimonialService.getAllTestimonials();
  sendResponse(res, {
    success: true,
    message: 'Testimonials fetched successfully.',
    data: result,
    statusCode: 200,
  });
});

export const testimonialController = {
  getAllTestimonialController,
};
