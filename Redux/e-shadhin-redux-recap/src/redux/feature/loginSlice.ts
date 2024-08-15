import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    name:"",
    password:""
}


const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        setName:(state,action : PayloadAction<string>) =>{
            state.name = action.payload
        },
        setPassword:(state,action : PayloadAction<string>) =>{
            state.password = action.payload
        },
    }
})

export const {setName,setPassword} = loginSlice.actions

export default loginSlice.reducer