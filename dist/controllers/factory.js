"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAll = void 0;
// const APIFeatures = require('../utils/APIFeatures')
// const AppError = require('../utils/AppError')
const asyncHandler_1 = __importDefault(require("../utils/asyncHandler"));
// exports.checkId = (req, res, next, val) => {
//   console.log(`Document id is ${val}`)
//   // return (req.params.id = val * 1)
//   return next()
// }
const fetchAll = (MongooseModel) => (0, asyncHandler_1.default)(async (req, res, next) => {
    const docs = await MongooseModel.find();
    res.status(200).json({
        status: 'succes',
        docs,
    });
});
exports.fetchAll = fetchAll;
