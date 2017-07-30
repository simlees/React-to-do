import React, { Component } from 'react';
import { TodoItem } from './TodoItem';

// Inline map
export class TodoList extends React.Component {
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
          <TodoItem key={index.toString()}
                    title={todo.title}
                    content={todo.content}
                    deleteTodo={() => this.props.deleteTodo(index)}
                    selectTodo={() => this.props.selectTodo(index)} />
        )}
      </ul>
    );
  }
}
