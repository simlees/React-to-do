import React, { Component } from 'react';

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    /**
     * This binding is necessary to make `this` work in the callback.
     * In JS, class methods are not bound by default.
     */ 
    // this.handleClick = this.handleClick.bind(this);
  }

/**
 *  Below uses property initialiser syntax, removing
 * need to explicity bind method to 'this'
 */
//   handleClick() {
  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}