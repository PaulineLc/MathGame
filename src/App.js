import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import AnswerForm from './AnswerForm';
import BasicMathChallenge from './BasicMathChallenge';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {score:0, timeIsUp:false};
    this.increaseScore = this.increaseScore.bind(this);
    this.terminateGame = this.terminateGame.bind(this);
  }

  increaseScore() {
    this.setState((prevState) => ({
      score: prevState.score + 1
    }));
  }

  terminateGame() {
    this.setState({timeIsUp: true});
  }

  render() {
    if (this.state.timeIsUp) {
      return(
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Game over! You got {this.state.score} points. Congratulations!</p>
        </div>
      )
    } else {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Timer time={20} onTimeUp={this.terminateGame} />
          <BasicMathChallenge onGoodAnswer={this.increaseScore}/>
          <p>{this.state.score}</p>
        </div>
      );
    }
  }
}

export default App;
