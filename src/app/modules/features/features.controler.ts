import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { featuresService } from './features.service';

const getFeaturesController = catchAsync(async (req, res) => {
  const result = await featuresService.getFeaturesService();
  sendResponse(res, {
    success: true,
    data: result,
    message: 'Features fetched successfully.',
    statusCode: 200,
  });
});

export const featuresController = {
  getFeaturesController,
};
