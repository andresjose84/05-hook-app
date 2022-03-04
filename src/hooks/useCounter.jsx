import { useState } from 'react';

export const useCounter = (init = 10) => {
    const [state, setState] = useState(init);

    const increment = (factor = 1) => {
        setState(state + factor);
    }

    const decrement = (factor = 1) => {
        setState(state - factor);
    }

    const reset = () => {
        setState(init);
    }

    return {
        state,
        increment,
        decrement,
        reset
    }

}
