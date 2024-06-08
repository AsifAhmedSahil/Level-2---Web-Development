import express from 'express';

// import { updateFacultyValidationSchema } from './faculty.validation';
// import validationSchema from '../../middlewares/validationSchema';
import { facultyControlers } from './faculty.controller';
import validationSchema from '../../middlewares/validationSchema';
import { FacultyValidations } from './faculty.validation';

const router = express.Router();

router.get('/', facultyControlers.getAllFaculty);

router.get('/:id', facultyControlers.getSingleFaculty);

router.patch(
  '/:id',
  validationSchema(FacultyValidations.updateFacultyValidationSchema),
  facultyControlers.updateFaculty,
);

router.delete('/:id', facultyControlers.deleteFaculty);



export const FacultyRoutes = router;