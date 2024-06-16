import express from "express";
import { studentController } from "./student.controller";
import validationSchema from "../../middlewares/validationSchema";
import { studentValidations } from "./student.validaion";
import auth from "../../middlewares/auth";

const router = express.Router();

// will call controller function


router.get('/',studentController.getAllStudents)
router.get('/:studentId',auth('admin','faculty'),studentController.getSingleStudent)
router.patch('/:studentId',validationSchema(studentValidations.updateStudentValidationSchema),studentController.updateSingleStudent)
router.delete('/:studentId',studentController.deleteSingleStudent)

export const studentRoute  = router;