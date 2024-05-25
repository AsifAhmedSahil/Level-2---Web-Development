import * as z from 'zod';

// Define Zod validation schema for userName
const userNameValidationSchema = z.object({
    firstName: z.string().min(1).max(20),
    middleName: z.string(),
    lastName: z.string(), // Use regex to match only alphabetic characters
});

// Define Zod validation schema for Guirdian
const guirdianValidationSchema = z.object({
    fatherName: z.string(),
    fatherOccupation: z.string(),
    fatherNo: z.string(),
    motherName: z.string(),
    motherNo: z.string(),
    motherOccupation: z.string(),
});

// Define Zod validation schema for LocalGuirdian
const localGuirdianValidationSchema = z.object({
    name: z.string(),
    address: z.string(),
    contact: z.string(),
});

// Define Zod validation schema for Student
 const createStudentValidationSchema = z.object({
    body: z.object({
        password:z.string().max(20),
        student: z.object({
            name: userNameValidationSchema,
        gender: z.enum(['male', 'female', 'others']),
        dateOfBirth: z.string().optional(),
        email: z.string().email(),
        contact: z.string(),
        emergenceContactNo: z.string(),
        bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']).optional(),
        presentAddress: z.string(),
        permanentAddress: z.string(),
        guirdian: guirdianValidationSchema,
        localGuirdian: localGuirdianValidationSchema,
        photoUrl: z.string().optional(),
        })
        
    
    })
 });

export const studentValidations ={
    studentValidationSchema: createStudentValidationSchema
}