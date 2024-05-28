import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import config from "../../app/config";
import bcrypt from "bcrypt";



const UserSchema = new Schema<TUser>({
    id:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    needPasswordChange:{
        type: Boolean,
        default:true
    },
    role:{
        type: String,
        enum:['admin','faculty' ,'student']
    },
    status:{
        type: String,
        enum:['in-progress','blocked'],
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


export const User = model<TUser>('User',UserSchema)