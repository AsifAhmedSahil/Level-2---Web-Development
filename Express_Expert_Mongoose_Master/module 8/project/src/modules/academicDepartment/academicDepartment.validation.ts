import { z } from 'zod';

const createAcademicDepartmentValidationSchema = z.object({
    body: z.object({
        name: z.string({
          invalid_type_error: 'name is required!',
        }),
        academicFaculty: z.string({
          invalid_type_error: 'Academic Faculty is required!',
        }),
      })
})
const updateAcademicDepartmentValidationSchema = z.object({
    body: z.object({
        name: z.string({
          invalid_type_error: 'name is required!',
        }),
      })
})

export const AcademicDepertmentValidation = {
     createAcademicDepartmentValidationSchema,
    updateAcademicDepartmentValidationSchema
};
