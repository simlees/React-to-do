import React, { Component } from 'react';

export class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: false};
  }

  render() {
    return (
      <li>
        <h4 onClick={this.props.select}>{this.props.title}</h4>
        <button onClick={this.props.edit}>Edit</button>
        <button onClick={this.props.deleteToDo}>Delete</button>
      </li>
    );
  }
}