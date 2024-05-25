import { z } from "zod";


export const userValidationSchema = z.object({
    id:z.string(),
    password:z.string().max(20,{message: "password can not be more than 20 characters!"}),
    needPasswordChange:z.boolean().optional().default(true),
    role:z.enum(['admin','faculty' ,'student']),
    status:z.enum(['in-progress','blocked']).default("in-progress"),
    isDeleted:z.boolean().default(true).optional()
})