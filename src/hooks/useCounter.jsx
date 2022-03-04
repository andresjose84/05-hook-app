import { useState } from 'react';

export const useCounter = (init = 10) => {
    const [counter, setCounter] = useState(init);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(init);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}
