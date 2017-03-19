import React, { Component } from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {timeLeftSeconds: this.props.time};
  }

  tick() {
    this.setState( (prevState) => ({
      timeLeftSeconds: prevState.timeLeftSeconds - 1
    }));
    if (this.state.timeLeftSeconds <= 0) {
      clearInterval(this.timerID);
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h2>You have {this.state.timeLeftSeconds} seconds left.</h2>
      </div>
    )
  }
}

export default Timer;
