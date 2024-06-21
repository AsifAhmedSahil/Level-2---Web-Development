import express from "express";

import validationSchema from "../../middlewares/validationSchema";
import { semesterRegistrationValidation } from "./semesterRegistration.validation";

import { semesterRegistrationControllers } from "./semesterRegistration.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constants";



const router = express.Router();


router.post("/create-semester-registration",auth(USER_ROLE.superAdmin,USER_ROLE.admin),validationSchema(semesterRegistrationValidation.createSemesterRegistrationValidationSchema),semesterRegistrationControllers.createSemesterRegistration)
router.get("/",auth(USER_ROLE.superAdmin,USER_ROLE.admin,USER_ROLE.faculty,USER_ROLE.student),semesterRegistrationControllers.getAllSemesterRegistration)
router.get("/:id",auth(USER_ROLE.superAdmin,USER_ROLE.admin,USER_ROLE.faculty,USER_ROLE.student),semesterRegistrationControllers.getSingleSemesterRegistration)
router.patch("/:id",auth(USER_ROLE.superAdmin,USER_ROLE.admin),validationSchema(semesterRegistrationValidation.updateSemesterRegistrationValidationSchema),semesterRegistrationControllers.updateSemesterRegistration)


export const semesterRegistrationRoute  = router;