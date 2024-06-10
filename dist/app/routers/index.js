"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const features_routes_1 = require("../modules/features/features.routes");
const testRoutes_1 = require("../modules/test/testRoutes");
const testimonials_routes_1 = require("../modules/testimonials/testimonials.routes");
const router = express_1.default.Router();
const modulesRoutes = [
    { path: '/', route: testRoutes_1.testRoutes },
    { path: '/api', route: features_routes_1.featuresRoutes },
    { path: '/api', route: testimonials_routes_1.testimonialRoutes },
];
modulesRoutes.map((route) => router.use(route.path, route.route));
exports.default = router;
