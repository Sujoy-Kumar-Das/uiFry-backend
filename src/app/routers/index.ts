import express from 'express';
import { featuresRoutes } from '../modules/features/features.routes';
import { testRoutes } from '../modules/test/testRoutes';
import { testimonialRoutes } from '../modules/testimonials/testimonials.routes';

const router = express.Router();

const modulesRoutes = [
  { path: '/', route: testRoutes },
  { path: '/api', route: featuresRoutes },
  { path: '/api', route: testimonialRoutes },
];

modulesRoutes.map((route) => router.use(route.path, route.route));

export default router;
