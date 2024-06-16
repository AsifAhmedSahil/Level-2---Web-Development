import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./user.interface";
import config from "../../app/config";
import bcrypt from "bcrypt";
import { userStatus } from "./user.constants";



const UserSchema = new Schema<TUser,UserModel>({
    id:{
        type: String,
        required:true,
        unique:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
        select: 0
    },
    needPasswordChange:{
        type: Boolean,
        default:true
    },
    passwordChangeAt:{
        type:Date 
    },
    role:{
        type: String,
        enum:['admin','faculty' ,'student']
    },
    status:{
        type: String,
        enum: userStatus,
        default:"in-progress"
    },
    isDeleted:{
        type: Boolean,
        default:false
    }


},{timestamps:true})

// pre save middleware or hook

UserSchema.pre('save',async function(next){
    // hashing pasword and save into DB
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this
    user.password = await bcrypt.hash(user.password,Number(config.bcrypt_salt_rounds),)

    next()

})

// post save middleware or hook
UserSchema.post('save', function(doc,next){
    doc.password = "";
    next()
})

UserSchema.statics.isUserExistsByCustomId = async function(id:string){
    return await User.findOne({id}).select('+password')
}

UserSchema.statics.isPasswordMatched = async function(plainTextPassword,HashedPassword){
    return await bcrypt.compare(plainTextPassword,HashedPassword)
}

UserSchema.statics.idJwtIssuedBeforePasswordChanged = async function(passwordChangeTimeStamp:Date,jwtIssuedTimeStamp: number){
    const passwordChangedTime =
    new Date(passwordChangeTimeStamp).getTime() / 1000;
    console.log(passwordChangedTime)
    console.log(jwtIssuedTimeStamp)
    console.log(passwordChangedTime > jwtIssuedTimeStamp)
  return passwordChangedTime > jwtIssuedTimeStamp;

}


export const User = model<TUser,UserModel>('User',UserSchema)