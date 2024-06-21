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
        password:z.string().max(20).optional(),
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
        academicSemester: z.string(),
        academicDepartment: z.string()
        
        // photoUrl: z.string().optional(),
        })
        
    
    })
 });

// *************************update validation schema *******************************

// Define Zod update validation schema for userName

const updateUserNameValidationSchema = z.object({
    firstName: z.string().min(1).max(20).optional(),
    middleName: z.string().optional(),
    lastName: z.string().optional(), // Use regex to match only alphabetic characters
});

// Define Zod validation schema for Guirdian
const updateGuirdianValidationSchema = z.object({
    fatherName: z.string().optional(),
    fatherOccupation: z.string().optional(),
    fatherNo: z.string().optional(),
    motherName: z.string().optional(),
    motherNo: z.string().optional(),
    motherOccupation: z.string().optional(),
});

// Define Zod validation schema for LocalGuirdian
const updateLocalGuirdianValidationSchema = z.object({
    name: z.string().optional(),
    address: z.string().optional(),
    contact: z.string().optional(),
});

// Define Zod validation schema for Student
 const updateStudentValidationSchema = z.object({
    body: z.object({
        password:z.string().max(20).optional(),
        student: z.object({
            name: updateUserNameValidationSchema,
        gender: z.enum(['male', 'female', 'others']).optional(),
        dateOfBirth: z.string().optional(),
        email: z.string().email().optional(),
        contact: z.string().optional(),
        emergenceContactNo: z.string().optional(),
        bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']).optional(),
        presentAddress: z.string().optional(),
        permanentAddress: z.string().optional(),
        guirdian: updateGuirdianValidationSchema,
        localGuirdian: updateLocalGuirdianValidationSchema,
        academicSemester: z.string().optional(),
        photoUrl: z.string().optional().optional(),
        })
        
    
    })
 });

export const studentValidations ={
     createStudentValidationSchema,
     updateStudentValidationSchema
}