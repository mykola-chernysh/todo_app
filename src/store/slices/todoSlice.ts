import {createSlice} from "@reduxjs/toolkit";

import {ITodo} from "../../interfaces";

interface IState {
    todos: ITodo[],
    todo: ITodo
}

const initialState: IState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    todo: null
};

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            }
            state.todos.push(newTodo);
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },

        getUpdateTodo: (state, action) => {
            state.todo = action.payload
        },

        edit: (state, action) => {
            const updateTodo = {
                id: state.todo.id,
                title: action.payload.title,
                completed: state.todo.completed
            }
            const index = state.todos.findIndex(todo1 => todo1.id === state.todo.id)
            state.todos[index] = updateTodo;
            state.todo = null;
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },

        delete: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },

        setCompleted: (state, action) => {
            const index = state.todos.findIndex( todo => todo.id === action.payload.id);
            state.todos[index].completed = action.payload.completed;
            localStorage.setItem('todos', JSON.stringify(state.todos))
        }
    }
})

const {reducer: todoReducer, actions} = todoSlice;

const todoActions = {
    ...actions
}

export {
    todoReducer,
    todoActions
}