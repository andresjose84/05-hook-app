import React, { useEffect, useReducer } from 'react';

import './styles.css';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const ToDoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = (id) => {
        console.log('eliminado', id);
        const action = {
            type: 'delete',
            payload: id
        };
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('nueva tarea', description);
        if (description.trim() !== '') {
            console.log('entro', description);
            const newTodo = {
                id: new Date().getTime(),
                desc: description,
                done: false
            };
            const action = {
                type: 'add',
                payload: newTodo
            };

            dispatch(action);
            reset();
        }
    }

    return (
        <div className='container'>
            <h1>ToDosApp ( { todos.length } )</h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    {/* TodoList, todo, handleDelete, handleToggle  */}
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map((ele, indx) => (
                                // TodoListItem, todo, indx , handleDelete, handleToggle
                                <li
                                    key={ ele.id }
                                    className="list-group-item"
                                >
                                    <p
                                        className={`${ele.done && 'complete'}`}
                                        onClick={ () => handleToggle(ele.id) }
                                    >{ indx + 1 }. { ele.desc }</p>
                                    <button
                                        onClick={ () => { handleDelete(ele.id) } }
                                        className='btn btn-danger'
                                    >
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <form
                        onSubmit={ handleSubmit }
                    >
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender..."
                            autoComplete="off"
                            value={ description }
                            onChange={ handleInputChange }
                        />
                        <div className="d-grid gap-2 mt-1">
                            <button
                                className="btn btn-outline-primary"
                                type="submit"
                            >
                                Agregar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
