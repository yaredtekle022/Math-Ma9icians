import React from 'react';
import ReactDOM from 'react-dom';
import './Calculator.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

ReactDOM.render(
  <div>
    <Calculator />
    <Quote />
  </div>,
  document.getElementById('root'),
);
