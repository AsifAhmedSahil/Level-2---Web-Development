import mongoose from "mongoose"
import { Admin } from "./admin.model"
import AppError from "../../error/AppError"
import httpStatus from "http-status"
import { User } from "../user/user.model"


const getAllAdminFromDB = async() =>{
    const result = await Admin.find()
    return result

}
const getSingleAdminFromDB = async(id:string) =>{
    const result = await Admin.findById(id)
    return result

}

const deleteAdminFromDB = async(id:string) =>{
    // use rollback and transaction because there are 2 write operation at a time
    const session = await mongoose.startSession()

    try {
        session.startTransaction()

        const deletedAdmin = await Admin.findByIdAndUpdate(
            id,
            {isDeleted: true},
            {new:true , session}
        )
        // check admin is here or not
        if(!deletedAdmin){
            throw new AppError(httpStatus.BAD_REQUEST,"Failed to delete Admin")
        }

        // get user id which is belong to admin
        const userId = deletedAdmin.user;

        const deletedUser = await User.findByIdAndUpdate(
            userId,
            {isDeleted:true},
            {new:true , session}
        )
        // check user is deleted or not
        if(!deletedUser){
            throw new AppError(httpStatus.BAD_REQUEST,"Failed to delete User which is admin")
        }

        await session.commitTransaction()
        await session.endSession()

        return deletedAdmin
        
    } catch (error) {
        await session.abortTransaction()
        await session.endSession()

        throw new AppError(httpStatus.BAD_REQUEST,"Failed to delete Admin from database!")
        
    }
}

export const AdminServices = {
    getAllAdminFromDB,
    getSingleAdminFromDB,
    deleteAdminFromDB
}