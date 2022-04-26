import React, { useLayoutEffect, useRef, useState } from 'react';
import './layout.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const Layout = () => {
    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    //console.log(state);
    const { quote } = !!data && data[0];
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({})
    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])


    console.log(data);
    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <div className='alert alert-info text-center'>
                Loading...
            </div>

            <blockquote className='blockquote text-right '>
                <p
                    className='mb-0'
                    ref={ pTag }
                > { quote } </p>
            </blockquote>

            <pre>
                {
                    JSON.stringify(boxSize, null, 3)
                }
            </pre>

            <button className='btn btn-primary' onClick={ increment }>Siguiente Quote</button>
        </div>
    )
}
