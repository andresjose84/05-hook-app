import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import '../02-useEfect/effects.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

  return (
    <div>
        <h1>Real Example Ref</h1>
        <hr />
        {  show && <MultipleCustomHooks />}

        <button className='btn btn-primary mt-5'
        onClick={()=>{
            setShow(!show);
        }}>Mostrar</button>
    </div>
  )
}
