import Joi from 'joi';

// Define Joi schema for userName
const userNameSchema = Joi.object({
    firstName: Joi.string().trim().max(20).required().pattern(/^[A-Z][a-z]*$/),
    middleName: Joi.string().required(),
    lastName: Joi.string().required().pattern(/^[a-zA-Z]+$/),
});

// Define Joi schema for guirdian
const guirdianSchema = Joi.object({
    fatherName: Joi.string().required(),
    fatherOccupation: Joi.string().required(),
    fatherNo: Joi.string().required(),
    motherName: Joi.string().required(),
    motherOccupation: Joi.string().required(),
    motherNo: Joi.string().required(),
});

// Define Joi schema for localGuirdian
const localGuirdianSchema = Joi.object({
    name: Joi.string(),
    address: Joi.string(),
    contact: Joi.string(),
});

// Define Joi schema for student
const studentValidationSchema = Joi.object({
    id: Joi.string().required(),
    name: userNameSchema.required(),
    gender: Joi.string().valid('male', 'female', 'others').required(),
    dateOfBirth: Joi.string(),
    email: Joi.string().email().required(),
    contact: Joi.string().required(),
    emergenceContactNo: Joi.string().required(),
    bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'),
    presentAddress: Joi.string().required(),
    permanentAddress: Joi.string().required(),
    guirdian: guirdianSchema.required(),
    localGuirdian: localGuirdianSchema.required(),
    photoUrl: Joi.string(),
    isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default studentValidationSchema;
