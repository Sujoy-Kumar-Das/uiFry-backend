"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testimonialModel = void 0;
const mongoose_1 = require("mongoose");
const testimonialSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
    },
    feedback: {
        type: String,
        required: [true, 'Feedback is required.'],
    },
    title: {
        type: String,
        required: [true, 'Title is required.'],
    },
    image: {
        type: String,
        required: [true, 'Image is required.'],
    },
});
exports.testimonialModel = (0, mongoose_1.model)('testimonial', testimonialSchema);
