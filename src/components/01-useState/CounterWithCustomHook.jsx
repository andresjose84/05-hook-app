import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';
const CounterWithCustomHook = () => {
    const INIT = 100;
    const { state, increment, decrement, reset } = useCounter(INIT);

    return (
        <>
            <h1>Counter with Hook {state}</h1>
            <hr />
            <button className='btn plus-btn' onClick={()=>increment(2)}>+1</button>
            <button className='btn reset-btn' onClick={reset}>Reset</button>
            <button className='btn rest-btn' onClick={()=>decrement(2)}>-1</button>
        </>
    )
}

export default CounterWithCustomHook