import {PayloadAction, createSlice} from "@reduxjs/toolkit"

type TTodo = {
    title:string,
    description:string,
    isCompleted?: boolean
}

type TInitialTodos = {
    todos: TTodo[]
}

const initialState : TInitialTodos = {
    todos:[]
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        addTodo: (state,action : PayloadAction<TTodo>) =>{
            state.todos.push({...action.payload,isCompleted:false})

        }
    }
})

export const {addTodo} = todoSlice.actions

export default todoSlice.reducer