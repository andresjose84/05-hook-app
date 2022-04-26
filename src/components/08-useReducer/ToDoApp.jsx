import React, { useEffect, useReducer } from 'react';

import './styles.css';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { ToDoAdd } from './ToDoAdd';

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

    const handleAddToDo = ( newToDo ) => {
        dispatch({
            type: 'add',
            payload: newToDo
        });
    }

    return (
        <div className='container'>
            <h1>ToDosApp ( { todos.length } )</h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                </div>
                <div className='col-5'>
                    <ToDoAdd 
                        handleAddToDo={handleAddToDo}
                    />
                </div>
            </div>
        </div>
    )
}
