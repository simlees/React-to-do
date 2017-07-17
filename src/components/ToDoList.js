import React, { Component } from 'react';
import { ToDoItem } from './ToDoItem';

// Inline map
export class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) =>
          <ToDoItem key={index.toString()}
                    title={todo.title}
                    content={todo.content}
                    deleteToDo={i => this.props.deleteToDo(i)} />
        )}
      </ul>
    );
  }
}