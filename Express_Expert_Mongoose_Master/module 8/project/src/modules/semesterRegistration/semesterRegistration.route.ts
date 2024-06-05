import express from "express";

import validationSchema from "../../middlewares/validationSchema";
import { semesterRegistrationValidation } from "./semesterRegistration.validation";

import { semesterRegistrationControllers } from "./semesterRegistration.controller";



const router = express.Router();


router.post("/create-semester-registration",validationSchema(semesterRegistrationValidation.createSemesterRegistrationValidationSchema),semesterRegistrationControllers.createSemesterRegistration)
router.get("/",semesterRegistrationControllers.getAllSemesterRegistration)
router.get("/:id",semesterRegistrationControllers.getSingleSemesterRegistration)
router.patch("/:id",validationSchema(semesterRegistrationValidation.updateSemesterRegistrationValidationSchema),semesterRegistrationControllers.updateSemesterRegistration)


export const semesterRegistrationRoute  = router;