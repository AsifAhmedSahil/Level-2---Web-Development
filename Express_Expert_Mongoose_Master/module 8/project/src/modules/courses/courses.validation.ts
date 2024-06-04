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
    preReqsiteCourses : z.array(preRequsiteCoursesValidationSchema).optional()
    })
})

export const courseValidation = {
    createCourseValidationSchema
}