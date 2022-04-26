import React from 'react'
import { useForm } from '../../hooks/useForm';

export const ToDoAdd = ({handleAddToDo}) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim() !== '') {
            console.log('entro', description);
            const newTodo = {
                id: new Date().getTime(),
                desc: description,
                done: false
            };
            handleAddToDo(newTodo);
            reset();
        }
    };


    return (
        <>
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
        </>
    )
}
