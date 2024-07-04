import { jwtDecode } from "jwt-decode"

export const verifyDecode = (token:string) =>{
    return jwtDecode(token)
}