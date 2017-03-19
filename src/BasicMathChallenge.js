import React, { Component } from 'react';
import AnswerForm from './AnswerForm';

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

    this.state = this.generateChallenge();

    this.checkAnswer = this.checkAnswer.bind(this);
  }

  generateChallenge() {
    const tempNum1 = getRandInt();
    const tempNum2 = getRandInt();
    return ({
        firstNumber: Math.max(tempNum1, tempNum2),
        secondNumber: Math.min(tempNum1, tempNum2),
        operation: getRandOperationType()
    })
  }

  checkAnswer(ans) {
    const correct = (parseInt(ans) === this.correctAnswer());
    if (correct) {
      this.setState(this.generateChallenge());
      this.props.onGoodAnswer();
    }
  }

  correctAnswer() {
    return eval(this.state.firstNumber + this.state.operation + this.state.secondNumber);
  }

  render() {
    return (
        <div>
          <h2>How much is {this.state.firstNumber} {this.state.operation} {this.state.secondNumber} ?</h2>
          <AnswerForm onSubmit={(ans) => this.checkAnswer(ans)}/>
        </div>
    )
  }
}

export default BasicMathChallenge
