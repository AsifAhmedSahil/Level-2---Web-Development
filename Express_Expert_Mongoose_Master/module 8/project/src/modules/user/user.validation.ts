import { z } from "zod";
import { userStatus } from "./user.constants";



const userValidationSchema = z.object({
    
    password:z.string().max(20,{message: "password can not be more than 20 characters!"}).optional(),
    
    
})
const changeStatusValidation = z.object({
    body: z.object({
        status: z.enum([...userStatus] as [string, ...string[]])
    })
})

export const userValidation = {
    userValidationSchema,
    changeStatusValidation

}