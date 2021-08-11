import React, { Component } from 'react';

import './Calculator.css';
import Button from './Button';

import calculate from './logic/calculate';
import operate from './logic/operate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <div className="calculator">
        <div className="calc-display">0</div>
        <div className="row">
          <Button character="AC" />
          <Button character="+/-" />
          <Button character="%" />
          <Button character="÷" classButton="sideBtn" />
        </div>
        <div className="row">
          <Button character="7" />
          <Button character="8" />
          <Button character="9" />
          <Button character="x" classButton="sideBtn" />
        </div>
        <div className="row">
          <Button character="4" />
          <Button character="5" />
          <Button character="6" />
          <Button character="-" classButton="sideBtn" />
        </div>
        <div className="row">
          <Button character="1" />
          <Button character="2" />
          <Button character="3" />
          <Button character="+" classButton="sideBtn" />
        </div>
        <div className="row">
          <Button character="0" classButton="btn btn0" />
          <Button character="." />
          <Button character="=" classButton="sideBtn" />
        </div>
      </div>
    );
  }
}

export default Calculator;
