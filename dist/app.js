"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: '1000kb' }));
app.use(express_1.default.urlencoded({ extended: true }));
const productRouter = require('./routes/products');
app.use('/api/v1/products', productRouter);
app.get('/', async (req, res, next) => {
    const totalCount = await Model.countDocuments();
    const features = new APIFeatures(Model.find(), req.query).filter().sort().fields().search().paginate();
    const docs = await features.query;
    // const docs = await features.query.explain()
    res.status(200).json({
        status: 'succes',
        totalCount,
        docs,
    });
});
exports.default = app;
