import React, { Component } from 'react';

const min = 0;
const max = 21;

function getRandInt() {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandOperationType() {
  return Math.random() >= 0.5 ? "+" : "-";
}

class BasicMathChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: getRandInt(),
      secondNumber: getRandInt(),
      operation: getRandOperationType()
    }
  }

  render() {
    return (
      <div>
        <h2>How much is {this.state.firstNumber} {this.state.operation} {this.state.secondNumber} ?</h2>
      </div>
    )
  }
}

export default BasicMathChallenge
