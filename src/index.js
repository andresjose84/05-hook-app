import React from 'react';
import ReactDOM from 'react-dom';
//import CounterApp from './componets/01-useState/CounterApp';
//import HookApp from './HookApp';
//import CounterWithCustomHook from './componets/01-useState/CounterWithCustomHook';
import { SimpleForm } from './componets/02-useEfect/SimpleForm';

import './index.css';
ReactDOM.render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>,
  document.getElementById('root')
);