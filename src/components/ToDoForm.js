import React, { Component } from 'react';

export class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <input type="text" />
        <textarea rows="3"></textarea>
        <button onClick={this.props.delete}>Save</button>
      </form>
    );
  }
}