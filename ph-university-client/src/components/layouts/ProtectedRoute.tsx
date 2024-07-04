import { ReactNode } from "react"
import { useAppSelector } from "../../redux/hooks"
import { useRecentToken } from "../../redux/features/auth/authSlice"
import { Navigate } from "react-router-dom"


const ProtectedRoute = ({children} : {children: ReactNode}) => {

    const token = useAppSelector(useRecentToken)

    if(!token){
        return <Navigate to="/login" replace={true}/>
    }

  return children
}

export default ProtectedRoute