import { z } from "zod";

 const preRequsiteCoursesValidationSchema = z.object({
    course:z.string(),
    isDeleted: z.boolean().optional()
})

const createCourseValidationSchema = z.object({
    body: z.object({
        title: z.string(),
    prefix:z.string(),
    code:z.number(),
    credits: z.number(),
    preReqsiteCourses : z.array(preRequsiteCoursesValidationSchema).optional(),
    isDeleted: z.boolean().optional()
    })
})

// updateCourseValidationSchema

 const updatepreRequsiteCoursesValidationSchema = z.object({
    course:z.string(),
    isDeleted: z.boolean().optional()
})

const updateCourseValidationSchema = z.object({
    body: z.object({
        title: z.string().optional(),
    prefix:z.string().optional(),
    code:z.number().optional(),
    credits: z.number().optional(),
    preReqsiteCourses : z.array(updatepreRequsiteCoursesValidationSchema).optional(),
    isDeleted: z.boolean().optional()
    })
})



export const courseValidation = {
    createCourseValidationSchema,
    updateCourseValidationSchema
}