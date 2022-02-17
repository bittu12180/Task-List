import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const obj = [
  { id: "todo-0", name: "Bittu", completed: true }
 
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={obj}/> 
  </React.StrictMode>,
  document.getElementById('root')
);


