"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const colors_1 = __importDefault(require("colors"));
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const db = process.env.DB_URL;
mongoose_1.default
    .connect(db, {})
    .then(() => {
    console.log(colors_1.default.magenta.bold(`Database connection succesfull`));
})
    .catch((err) => {
    console.log(colors_1.default.red.bold(`Mongo DB Error ${err}`));
    console.log(colors_1.default.red.bold(`Mongo DB Error Message ${err.message}`));
});
const port = process.env.PORT || '5000';
app_1.default.listen(port, () => {
    console.log(colors_1.default.cyan.bold(`server running on port ${port}...`));
});
