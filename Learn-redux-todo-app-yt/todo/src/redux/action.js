import { ADD_TODO, FILTER_TODOS, MARK_ALL_COMPLETE, MARK_COMPLETE, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM } from "./actionType"


export const addTodo = (text) =>({
    type: ADD_TODO,
    payload: {text}
})

export const toggleTodo = (id) =>({
    type:TOGGLE_TODO,
    payload:{id}
})
export const removeTodo = (id) =>({
    type:REMOVE_TODO,
    payload:{id}
})
export const markCompleted = (id) =>({
    type:MARK_COMPLETE,
    payload:{id}
})
export const markInCompleted = (id) =>({
    type:MARK_INCOMPLETE,
    payload:{id}
})
export const filterTodos = (filter) =>({
    type:FILTER_TODOS,
    payload:{filter}
})
export const updateSearchTerm = (searchTerm) =>({
    type:UPDATE_SEARCH_TERM,
    payload:{searchTerm}
})
export const markAllComplete = () =>({
    type:MARK_ALL_COMPLETE
})