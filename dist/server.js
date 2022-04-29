"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const colors_1 = __importDefault(require("colors"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
dotenv_1.default.config();
const dbUrl = process.env.DB_URL || '';
const port = process.env.PORT ? Number(process.env.PORT) : 5000;
// async function run() {
//   await connect(db)
// }
mongoose_1.default
    .connect(dbUrl)
    .then(() => {
    console.log(colors_1.default.magenta.bold(`Database connection succesfull`));
    app_1.default.listen(port, () => {
        console.log(colors_1.default.cyan.bold(`server running on port ${port}...`));
    });
})
    .catch((err) => {
    console.log(colors_1.default.red.bold(`Mongo DB Error ${err}`));
    console.log(colors_1.default.red.bold(`Mongo DB Error Message ${err.message}`));
});
