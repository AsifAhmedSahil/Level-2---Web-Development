import { z } from "zod";


const LoginValidationSchema = z.object({
    body: z.object({
        id: z.string({ required_error: 'Id is required.' }),
        password: z.string({ required_error: 'Password is required' }),
    })
})


const changePasswordValidationSchema = z.object({
    body: z.object({
        
        oldPassword: z.string({ required_error: 'old password is required' }),
        newPassword: z.string({ required_error: 'Password is required' }),
    })
})

const refreshTokenValidation = z.object(
    {
        cookies: z.object({
            refreshToken: z.string({
                required_error:'Refresh Token is required'
            })
    
        })
    
    }
)

const forgetPasswordValidation = z.object({
    body:z.object({
        id:z.string({
            required_error: 'User id is required!'
        })
    })
})
const resetPasswordValidation = z.object({
    body:z.object({
        id:z.string({
            required_error: 'User id is required!'
        }),
        newPassword:z.string({
            required_error: 'password is required!'
        }),
    })
})

export const AuthValidation = {
     LoginValidationSchema,
     changePasswordValidationSchema,
     refreshTokenValidation,
     forgetPasswordValidation,
     resetPasswordValidation
}

