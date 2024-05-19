import { Schema, model,  } from 'mongoose';
import { Guirdian, LocalGuirdian, Student, StudentMethod, studentModel, userName } from './student/student.interface';
import validator from 'validator';


const userNameSchema = new Schema<userName>({
    
        firstName:{
            type:String,
            trim:true,
            maxlength: 20,
            required:true,
            validate:{
                validator: function(value : string){
                    const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1)
                    return firstNameStr === value
                },
                // message: "{VALUE} is not capitalize form"
            }
        },
        middleName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true,
            validate:{
                validator: (value : string) => validator.isAlpha(value),
                message:"{VALUE} is not valid"
            }
        },
    
})

const guirdianSchema = new Schema<Guirdian>(
    {
        fatherName:{
            type:String,
            required:true
        },
        fatherOccupation:{
            type:String,
            required:true
        },
        fatherNo:{
            type:String,
            required:true
        },
        motherName:{
            type:String,
            required:true
        },
        motherNo:{
            type:String,
            required:true
        },
        motherOccupation:{
            type:String,
            required:true
        },
    }
)
const localGuirdianSchema = new Schema<LocalGuirdian>(
    {
        name:{
            type:String
        },
        address:{
            type:String
        },
        contact:{
            type:String
        },
    }
)

const studentSchema = new Schema<Student ,studentModel,StudentMethod>({
    id:{type: String ,required:true ,unique:true},
    name:{
        type:userNameSchema,
        required:true
    },
    gender: {
        type:String,
        enum:["male",'female','others'],
        required:true
    },
    dateOfBirth:String,
    email: {
        type:String,
        required:true,
        unique:true,
        validate:{
            validator: (value:string) => validator.isEmail(value),
            message: "{VALUE} is not an valid email"
        }
    },
    contact: {
        type:String,
        required:true
    },
    emergenceContactNo: {
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        enum:['A+' , 'A-' , 'B+' , 'B-' , 'AB+' , 'AB-'],

    },
    presentAddress: {
        type:String,
        required:true
    },
    permanentAddress: {
        type:String,
        required:true
    },
    guirdian:{
        type:guirdianSchema,
        required:true
    },
    localGuirdian: {
        type:localGuirdianSchema,
        required:true
    },
    photoUrl: {type:String},
    isActive:{
        type:String,
        enum:['active','blocked'],
        default: "active"
    }

})

// create a model for schema

studentSchema.methods.isUserExist = async function(id: string) {
    const existingUser = await StudentModel.findOne({id})
    return existingUser
}

export const StudentModel = model<Student,studentModel>('Student',studentSchema)