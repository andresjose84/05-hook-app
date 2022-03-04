import React from 'react';
import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });
    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('Email cambio');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />
            <div className='from-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu Nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className='from-group'>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email@email.com'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            <div className='from-group'>
                <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='**********'
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            <button type='submit' className='btm btn-primary'>Guardar</button>
        </form>
    )
}
