"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.get('/', logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(something);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}));
app.post('/', (req, res) => {
    console.log(req.body);
    //res.send("got data")
    res.json({
        message: "succesfully send data"
    });
});
// for all route error handling
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route is not found"
    });
});
// global error handling
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "something went wrong"
        });
    }
});
exports.default = app;
