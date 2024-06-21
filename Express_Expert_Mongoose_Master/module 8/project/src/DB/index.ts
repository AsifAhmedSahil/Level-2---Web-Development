import config from "../app/config"
import { USER_ROLE } from "../modules/user/user.constants"
import { User } from "../modules/user/user.model"


const superUser = {
    id: '0001',
    email:'asifahmedsahil.007@gmail.com',
    password: config.super_admin_pass,
    needPasswordChange: false,
    status:'in-progress' ,
    role: USER_ROLE.superAdmin,
    isDeleted: false
}

const seedSuperAdmin = async() =>{
    // check is database carry any super admin or not
    const isSuperAdminExist = await User.findOne({role:USER_ROLE.superAdmin})

    if(!isSuperAdminExist){
        await User.create(superUser)
    }


}

export default seedSuperAdmin