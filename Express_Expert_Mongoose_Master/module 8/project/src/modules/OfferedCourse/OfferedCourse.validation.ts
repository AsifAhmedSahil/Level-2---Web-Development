import { z } from 'zod';
import { Days } from './OfferedCourse.contants';

const createOfferedCourseValidationSchema = z.object({
  body: z.object({
    semesterRegistration: z.string(),

    academicFaculty: z.string(),
    academicDepartment: z.string(),
    course: z.string(),
    faculty: z.string().optional(),
    maxCapacity: z.number(),
    section: z.number(),
    days: z.array(z.enum([...Days] as [string, ...string[]])),
    startTime: z.string().refine(
      (time) => {
        const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        return regex.test(time);
      },
      {
        message: "Invalid time format, excepted 'HH:MM' in 24 hours format",
      },
    ),
    endTime: z.string().refine(
        (time) => {
          const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
          return regex.test(time);
        },
        {
          message: "Invalid time format, excepted 'HH:MM' in 24 hours format",
        },
      )
  }).refine((body) =>{
    const start = new Date(`1970-01-01T${body.startTime}:00`);
    const end = new Date(`1970-01-01T${body.startTime}:00`);

    return end > start
  },
{
    message: "start time should be before end time!"
}),
});

const updateOfferedCourseValidationSchema = z.object({
  body: z.object({
    maxCapacity: z.number().optional(),
    faculty: z.string().optional(),
    days: z.enum([...Days] as [string, ...string[]]).optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
  }),
});

export const offeredCourseValidation = {
  createOfferedCourseValidationSchema,
  updateOfferedCourseValidationSchema,
};
