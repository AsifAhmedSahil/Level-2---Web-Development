import express from "express";
import { userControllers } from "./user.controller";


const router = express.Router();

// will call controller function
router.post('/create-student' , userControllers.createStudent)



export const userRoute  = router;