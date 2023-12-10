import React from 'react';

import './App.css';
import {TodoForm, TodoList} from "./components";

function App() {
    return (
        <div className={'App'}>
            <h1>To-Do list</h1>
            <TodoForm/>
            <TodoList/>
        </div>
    );
}

export {App};
