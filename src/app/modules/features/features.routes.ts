import express from 'express';
import { featuresController } from './features.controler';
const route = express.Router();

route.get('/feature', featuresController.getFeaturesController);

export const featuresRoutes = route;
