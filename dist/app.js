"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_1 = __importDefault(require("./routes/categories"));
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: '1000kb' }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v1/categories', categories_1.default);
app.get('/api/v1/ping', async (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'pong',
    });
});
exports.default = app;
