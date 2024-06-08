import { Admin } from "./admin.model"


const getAllAdminFromDB = async() =>{
    const result = await Admin.find()
    return result

}
const getSingleAdminFromDB = async(id:string) =>{
    const result = await Admin.findById(id)
    return result

}

export const AdminServices = {
    getAllAdminFromDB,
    getSingleAdminFromDB
}