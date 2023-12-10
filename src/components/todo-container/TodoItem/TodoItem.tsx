import React, {FC} from 'react';

import css from './TodoItem.module.css';
import {ITodo} from "../../../interfaces";
import {useAppDispatch} from "../../../hooks";
import {todoActions} from "../../../store";

interface IProps {
    todo: ITodo
}

const TodoItem: FC<IProps> = ({todo}) => {
    const {id, title, completed} = todo;
    const dispatch = useAppDispatch();

    const getTodo = (): void => {
        dispatch(todoActions.getUpdateTodo(todo))
    }

    const deleteTodo = (): void => {
        dispatch(todoActions.delete({id}))
    }

    const toggleTodoCompleted = (): void => {
        dispatch(todoActions.setCompleted({id: id, completed: !completed}));
    }

    return (
        <div className={css.Todo}>
            <label>
                <input
                    className={css.checkbox}
                    type="checkbox"
                    checked={completed}
                    onChange={toggleTodoCompleted}
                />
                <span className={css.new_checkbox}></span>
            </label>
            <p className={`${css.title} ${completed && css.title_competed}`}>{title}</p>
            <div className={css.todo_btn}>
                <button className={css.edit} onClick={getTodo}></button>
                <button className={css.delete} onClick={deleteTodo}></button>
            </div>
        </div>
    );
};

export {TodoItem};