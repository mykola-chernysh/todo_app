import React, {useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import css from './TodoForm.module.css';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {todoActions} from "../../../store";
import {ITodo} from "../../../interfaces";

const TodoForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const {todo} = useAppSelector(state => state.todo);
    const dispatch = useAppDispatch();

    const addNewTodo:SubmitHandler<ITodo> = (todo1) => {
       if (todo1.title) {
           dispatch(todoActions.add(todo1))
       }
        reset();
    }

    useEffect(() => {
        if (todo) {
            setValue('title', todo.title);
        }
    }, [todo, setValue]);

    const editTodo: SubmitHandler<ITodo> = (todo1) => {
        if (todo) {
            dispatch(todoActions.edit(todo1))
        }
        reset();
    }

    return (
        <div className={css.Form}>
            <form onSubmit={handleSubmit(todo ? editTodo : addNewTodo)}>
                <input
                    type="text"
                    placeholder={'Add todo'}
                    {...register('title')}
                />
                <button className={css.add_btn}></button>
            </form>
        </div>
    );
};

export {TodoForm};