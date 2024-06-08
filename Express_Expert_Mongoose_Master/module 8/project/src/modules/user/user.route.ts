import express from 'express';
import { userControllers } from './user.controller';

import { studentValidations } from '../student/student.validaion';
import validationSchema from '../../middlewares/validationSchema';

const router = express.Router();



// will call controller function
router.post(
  '/create-faculty',
  validationSchema(studentValidations.createStudentValidationSchema),
  userControllers.createStudent,
);
router.post(
  '/create-student',
  validationSchema(studentValidations.createStudentValidationSchema),
  userControllers.createStudent,
);

export const userRoute = router;
