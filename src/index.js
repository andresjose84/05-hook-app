import React from 'react';
import ReactDOM from 'react-dom';
import { RealExampleRef } from './componets/04-useRef/RealExampleRef';
//import { FocusScreen } from './componets/04-useRef/FocusScreen';
//import { MultipleCustomHooks } from './componets/03-examples/MultipleCustomHooks';
//import { FormWithCustomHook } from './componets/02-useEfect/FormWithCustomHook';
//import CounterApp from './componets/01-useState/CounterApp';
//import HookApp from './HookApp';
//import CounterWithCustomHook from './componets/01-useState/CounterWithCustomHook';
//import { SimpleForm } from './componets/02-useEfect/SimpleForm';

import './index.css';
ReactDOM.render(
  <React.StrictMode>
    <RealExampleRef />
  </React.StrictMode>,
  document.getElementById('root')
);