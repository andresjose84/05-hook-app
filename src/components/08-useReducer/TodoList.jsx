import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className='list-group list-group-flush'>
        {
            todos.map((ele, inx) => (
                <TodoListItem
                    key={ inx }
                    ele={ ele }
                    indx={ inx }
                    handleDelete={ handleDelete }
                    handleToggle={ handleToggle } />
            ))
        }
        </ul>
    )
}
