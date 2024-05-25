import express from 'express';
import { userControllers } from './user.controller';

import { studentValidations } from '../student/student.validaion';
import validationSchema from '../../middlewares/validationSchema';

const router = express.Router();



// will call controller function
router.post(
  '/create-student',
  validationSchema(studentValidations.studentValidationSchema),
  userControllers.createStudent,
);

export const userRoute = router;
