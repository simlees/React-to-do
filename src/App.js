import React, { Component } from 'react';
import logo from './logo.svg';
import { Clock } from './components/Clock';
import { Toggle } from './components/Toggle';
import { Greeting } from './components/Greeting';
import './App.css';

class App extends Component {
  render() {
    // JSX gets compiled to standard JS objects
    var simba = <Welcome name="Simba" />;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          The time is {new Date().toLocaleTimeString()}.
        </p>
        <WelcomeFunc name="Sim" />
        {simba}
        <Clock />
        <Toggle />
        <Greeting isLoggedIn={false} />
      </div>
    );
  }
}

// This is a react component. Remember; classes are just ES6 sugar.
function WelcomeFunc(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Components must never modify their own props. Trust.
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default App;
