import React from 'react';

import css from './TodoList.module.css';
import {TodoItem} from "../TodoItem";
import {useAppSelector} from "../../../hooks";

const TodoList= () => {
    const {todos} = useAppSelector(state => state.todo);

    return (
        <div className={css.Todos}>
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export {TodoList};