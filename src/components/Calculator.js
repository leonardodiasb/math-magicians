import React, { Component } from 'react';

import './Calculator.css';
import Button from './Button';
/* eslint-disable no-unused-vars */
import calculate from '../logic/calculate';
import operate from '../logic/operate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  addToInput = (val) => {
    const obj = calculate(this.state, val.target.innerHTML);
    this.setState(obj);
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="calculator">
        <div className="calc-display">{next === null ? total : next}</div>
        <div className="row">
          <Button character="AC" eventFunction={this.addToInput} />
          <Button character="+/-" eventFunction={this.addToInput} />
          <Button character="%" eventFunction={this.addToInput} />
          <Button character="÷" classButton="sideBtn" eventFunction={this.addToInput} />
        </div>
        <div className="row">
          <Button character="7" eventFunction={this.addToInput} />
          <Button character="8" eventFunction={this.addToInput} />
          <Button character="9" eventFunction={this.addToInput} />
          <Button character="x" classButton="sideBtn" eventFunction={this.addToInput} />
        </div>
        <div className="row">
          <Button character="4" eventFunction={this.addToInput} />
          <Button character="5" eventFunction={this.addToInput} />
          <Button character="6" eventFunction={this.addToInput} />
          <Button character="-" classButton="sideBtn" eventFunction={this.addToInput} />
        </div>
        <div className="row">
          <Button character="1" eventFunction={this.addToInput} />
          <Button character="2" eventFunction={this.addToInput} />
          <Button character="3" eventFunction={this.addToInput} />
          <Button character="+" classButton="sideBtn" eventFunction={this.addToInput} />
        </div>
        <div className="row">
          <Button character="0" classButton="btn btn0" eventFunction={this.addToInput} />
          <Button character="." eventFunction={this.addToInput} />
          <Button character="=" classButton="sideBtn" eventFunction={this.addToInput} />
        </div>
      </div>
    );
  }
}

export default Calculator;
