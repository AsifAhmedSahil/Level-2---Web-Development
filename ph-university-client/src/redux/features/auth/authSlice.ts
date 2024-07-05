import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser = {
    userId : string,
    role:string,
    iat: number,
    exp:number
}

type TInitial = {
    user : null | TUser,
    token: null |string
}

const initialState : TInitial = {
    user: null,
    token : null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setUser: (state,action) =>{
            const { user,token } = action.payload
            state.user = user,
            state.token = token
        },
        logout: (state) =>{
            state.user = null,
            state.token = null
        }
    }

})

export const {setUser,logout} = authSlice.actions

export default authSlice.reducer

export const useRecentToken = (state: RootState) => state.auth.token
export const selectRecentUser = (state: RootState) => state.auth.user