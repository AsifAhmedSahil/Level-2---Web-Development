import { Schema, model,  } from 'mongoose';
import { TGuirdian, TLocalGuirdian, TStudent, StudentMethod, studentModel, TuserName } from './student/student.interface';
import validator from 'validator';
import AppError from '../error/AppError';




const userNameSchema = new Schema<TuserName>({
    
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

const guirdianSchema = new Schema<TGuirdian>(
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
const localGuirdianSchema = new Schema<TLocalGuirdian>(
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

const studentSchema = new Schema<TStudent ,studentModel,StudentMethod>({
    id:{type: String ,required:true ,unique:true},
    user: {
        type:Schema.Types.ObjectId,
        ref: 'User',
        required:true,
        unique:true
    },
    
    name:{
        type:userNameSchema,
        required:true
    },
    gender: {
        type:String,
        enum:["male",'female','others'],
        required:true
    },
    dateOfBirth: {type : Date},
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
    academicSemester: {
        type:Schema.Types.ObjectId,
        ref:"AcademicSemester"
    },
    academicDepartment: {
        type:Schema.Types.ObjectId,
        ref:"AcademicDepartment"
    },
    academicFaculty: {
        type:Schema.Types.ObjectId,
        ref:"AcademicFaculty"
    },
    
    isDeleted: {
        type: Boolean,
        default: false
    }

})



// query middleware -- find data which is deleted and not show get data
studentSchema.pre('find',function(next){
    this.find({isDeleted: {$ne:true}})
    next()
})

studentSchema.pre('findOne',function(next){
    this.find({isDeleted: {$ne:true}})
    next()
})

studentSchema.pre("findOneAndUpdate",async function(next){
    const query = this.getQuery()
  console.log(query)
  const isStudentExist = await Student.findOne(query)
  if(!isStudentExist){
    throw new AppError(404,"Student does not exist")
  }
  next()
})




// create a model for schema

studentSchema.methods.isUserExist = async function(id: string) {
    const existingUser = await Student.findOne({id})
    return existingUser
}

export const Student = model<TStudent,studentModel>('Student',studentSchema)