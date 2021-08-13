import React, { useState } from 'react';

import './Calculator.css';
import Button from './Button';
/* eslint-disable no-unused-vars */
import calculate from '../logic/calculate';
import operate from '../logic/operate';

const Calculator = () => {
  const [state, setState] = useState({ total: '0', next: null, operation: null });

  const addToInput = (val) => {
    const obj = calculate(state, val.target.innerHTML);
    setState(obj);
  };

  return (
    <div className="calculator">
      <div className="calc-display">{state.next === null ? state.total : state.next}</div>
      <div className="row">
        <Button character="AC" eventFunction={addToInput} />
        <Button character="+/-" eventFunction={addToInput} />
        <Button character="%" eventFunction={addToInput} />
        <Button character="÷" classButton="sideBtn" eventFunction={addToInput} />
      </div>
      <div className="row">
        <Button character="7" eventFunction={addToInput} />
        <Button character="8" eventFunction={addToInput} />
        <Button character="9" eventFunction={addToInput} />
        <Button character="x" classButton="sideBtn" eventFunction={addToInput} />
      </div>
      <div className="row">
        <Button character="4" eventFunction={addToInput} />
        <Button character="5" eventFunction={addToInput} />
        <Button character="6" eventFunction={addToInput} />
        <Button character="-" classButton="sideBtn" eventFunction={addToInput} />
      </div>
      <div className="row">
        <Button character="1" eventFunction={addToInput} />
        <Button character="2" eventFunction={addToInput} />
        <Button character="3" eventFunction={addToInput} />
        <Button character="+" classButton="sideBtn" eventFunction={addToInput} />
      </div>
      <div className="row">
        <Button character="0" classButton="btn btn0" eventFunction={addToInput} />
        <Button character="." eventFunction={addToInput} />
        <Button character="=" classButton="sideBtn" eventFunction={addToInput} />
      </div>
    </div>
  );
};

export default Calculator;
