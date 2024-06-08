import express from 'express';

// import { updateFacultyValidationSchema } from './faculty.validation';
// import validationSchema from '../../middlewares/validationSchema';
import { facultyControlers } from './faculty.controller';

const router = express.Router();

router.get('/', facultyControlers.getAllFaculty);

// router.get('/:id', facultyControlers.getAllFaculty);

// router.patch(
//   '/:id',
//   validationSchema(updateFacultyValidationSchema),
//   facultyControlers.updateFaculty,
// );

// router.delete('/:id', facultyControlers.deleteFaculty);



export const FacultyRoutes = router;