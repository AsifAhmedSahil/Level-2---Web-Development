"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// parser
app.use(express_1.default.json());
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// router in express
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
// post request for create user
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: "create user successfully"
    });
});
// post request for course user
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: "create user successfully"
    });
});
app.get('/', logger, (req, res) => {
    res.send('Hello sahil world!');
});
app.post('/', (req, res) => {
    console.log(req.body);
    //res.send("got data")
    res.json({
        message: "succesfully send data"
    });
});
exports.default = app;
