"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.featuresRoutes = void 0;
const express_1 = __importDefault(require("express"));
const features_controler_1 = require("./features.controler");
const route = express_1.default.Router();
route.get('/feature', features_controler_1.featuresController.getFeaturesController);
exports.featuresRoutes = route;
