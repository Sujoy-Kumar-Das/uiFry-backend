import { featuresModel } from './features.model';

const getFeaturesService = async () => {
  const result = await featuresModel.find({});
  return result;
};

export const featuresService = {
  getFeaturesService,
};
