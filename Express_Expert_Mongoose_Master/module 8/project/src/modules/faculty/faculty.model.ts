import { Schema, model } from 'mongoose';
import { TFaculty, TUsername } from './faculty.interface';
import { BloodGroup, Gender } from './faculty.constants';

const userNameSchema = new Schema<TUsername>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [20, 'name can not be more that 20 characters!'],
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [20, 'name can not be more that 20 characters!'],
  },
});

const facultySchema = new Schema<TFaculty>({
  id: {
    type: String,
    required: [true, 'ID is required'],
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'user id is required'],
    unique: true,
    ref: 'User',
  },
  designation: {
    type: String,
    required: [true, 'designation is required'],
  },
  name: {
    type: userNameSchema,
    required: [true, 'name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: Gender,
      message: '{VALUE} is not a valid gender',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: {
    type: Date,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Conatact Number is required'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Conatact Number is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: BloodGroup,
      message: '{VALUE} is not a valid blood group',
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  profileImg: { type: String },
  academicDepartment: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id is required'],
    ref: 'User',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
//   {
//     toJSON: {
//       virtuals: true,
//     },
//   },
});


export const Faculty = model<TFaculty>("Faculty",facultySchema)
