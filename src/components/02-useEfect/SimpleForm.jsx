import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
    const [state, setState] = useState({
        name : '',
        email: ''
    });
    const { name, email} = state;
    useEffect(()=>{
        // console.log('Hey!');
    },[]);

    useEffect(()=>{
        // console.log('FormState Cambio!');
    },[state]);

    useEffect(()=>{
        // console.log('email Cambio!');
    },[email]);


    const handleInputChange = ({target}) => {
        console.log('name',target.name);
        console.log('value',target.value);
        setState({
            ...state,
            [target.name] : target.value
        })
    }

    return (
        <>
            <h1>UseEfect</h1>
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

            { name === '123' && <Message /> }

        </>
    )
}
