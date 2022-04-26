import React from 'react'

export const TodoListItem = ({ ele, indx, handleDelete, handleToggle }) => {
    return (
        <li
            key={ ele.id }
            className="list-group-item" >
            <p
                className={ `${ ele.done && 'complete' }` }
                onClick={ () => handleToggle(ele.id) }
            >{ indx + 1 }. { ele.desc }</p>
            <button
                onClick={ () => { handleDelete(ele.id) } }
                className='btn btn-danger'
            >
                Borrar
            </button>
        </li>
    )
}
