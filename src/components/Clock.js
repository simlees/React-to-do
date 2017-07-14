import React, { Component } from 'react';

export class Clock extends React.Component {
  constructor(props) {
    // Always call super
    super(props);
    this.state = {date: new Date()};
  }

  // Called after rendered to DOM
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // Never set state directly (this.state = ...) apart from in constructor
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

  someStuff() {
    // Wrong
    this.setState({
      counter: this.state.counter + this.props.increment,
    });

    // Correct
    this.setState((prevState, props) => ({
      counter: prevState.counter + props.increment
    }));
  }
}