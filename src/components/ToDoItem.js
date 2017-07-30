import React, { Component } from 'react';

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: false};
  }

  render() {
    return (
      <li>
        <h4 onClick={this.props.select}>{this.props.title}</h4>
        <button onClick={this.props.selectTodo}>Edit</button>
        <button onClick={this.props.deleteTodo}>Delete</button>
      </li>
    );
  }
}
