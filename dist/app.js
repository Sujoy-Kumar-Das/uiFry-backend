"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./app/routers"));
const app = (0, express_1.default)();
// application middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routers
app.use(routers_1.default);
exports.default = app;
