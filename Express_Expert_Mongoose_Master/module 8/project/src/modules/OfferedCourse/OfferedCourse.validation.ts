import { z } from "zod";
import { Days } from "./OfferedCourse.contants";



const createOfferedCourseValidationSchema = z.object({
    body: z.object({
        semesterRegistration: z.string(),
        academicSemester: z.string(),
        academicFaculty:z.string(),
        academicDepartment:z.string(),
        course:z.string(),
        faculty:z.string(),
        maxCapacity:z.number(),
        section:z.number(),
        days: z.enum([...Days] as [string,...string[]]),
        startTime:z.string(),
        endTime : z.string()
    })
})

const updateOfferedCourseValidationSchema = z.object({
    body: z.object({
        
        maxCapacity:z.number().optional(),
        faculty:z.string().optional(),
        days: z.enum([...Days] as [string,...string[]]).optional(),
        startTime:z.string().optional(),
        endTime : z.string().optional()
    })
})

export const offeredCourseValidation = {
    createOfferedCourseValidationSchema,
    updateOfferedCourseValidationSchema

}