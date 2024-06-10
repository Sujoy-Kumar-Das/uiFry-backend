"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.featuresModel = void 0;
const mongoose_1 = require("mongoose");
const featuresModelSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, 'Title is required.'],
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
    },
    image: {
        type: String,
        required: [true, 'Image is required.'],
    },
});
exports.featuresModel = (0, mongoose_1.model)('features', featuresModelSchema);
