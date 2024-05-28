import { z } from 'zod';

const createAcademicFacultyValidationSchema = z.object({
  name: z.string({
    invalid_type_error: 'name is required!',
  }),
});
const updateAcademicFacultyValidationSchema = z.object({
  name: z.string({
    invalid_type_error: 'name is required!',
  }),
});

export const AcademicFacultyValidation = {
    createAcademicFacultyValidationSchema,
    updateAcademicFacultyValidationSchema
};
