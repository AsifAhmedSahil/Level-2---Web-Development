import { z } from 'zod';

const createAcademicFacultyValidationSchema = z.object({
    body: z.object({
        name: z.string({
          invalid_type_error: 'name is required!',
        }),
      })
})
const updateAcademicFacultyValidationSchema = z.object({
    body: z.object({
        name: z.string({
          invalid_type_error: 'name is required!',
        }),
      })
})

export const AcademicFacultyValidation = {
    createAcademicFacultyValidationSchema,
    updateAcademicFacultyValidationSchema
};
