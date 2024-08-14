import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    name:"",
    email:"",
    password:"",
    role:""
}

const registerSlice = createSlice({
    name:'register',
    initialState,
    reducers:{
        setName:(state,action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setEmail:(state,action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setPassword:(state,action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setRole:(state,action: PayloadAction<string>) => {
            state.role = action.payload
        },

    }

})

export const {setName,setEmail,setPassword,setRole} = registerSlice.actions


export default registerSlice.reducer