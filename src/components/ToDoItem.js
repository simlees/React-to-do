import React, { Component } from 'react';

/**
 * Behold, a conditional component.
 * @param {*} props 
 */
export class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: false};
  }

  render() {
    return (
      <li>
        <h4 onClick={props.select}>{props.title}</h4>
        <button onClick={props.edit}>Edit</button>
        <button onClick={props.delete}>Delete</button>
      </li>
    );
  }
}