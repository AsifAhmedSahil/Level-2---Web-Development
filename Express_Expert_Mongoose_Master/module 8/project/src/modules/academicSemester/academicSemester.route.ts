import express from "express";
import { AcademicSemesterControllers } from "./academicSemester.controller";
import validationSchema from "../../middlewares/validationSchema";
import createAcademicSemesterValidationSchema from "./academicSemesterValidation";


const router = express.Router();


router.post("/create-academic-semester",validationSchema(createAcademicSemesterValidationSchema),AcademicSemesterControllers.createAcademicSemesterController)
router.get("/get-academic-semester",AcademicSemesterControllers.getAllAcademicSemester)

// will call controller function


// router.get('/',studentController.getAllStudents)
// router.get('/:studentId',studentController.getSingleStudent)
// router.delete('/:studentId',studentController.deleteSingleStudent)

export const AcademicSemesterRoutes  = router;