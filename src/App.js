import React, { Component } from 'react';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          title: 'Do shopping',
          content: 'Go to Sainsbos and buy stuff'
        },
        {
          title: 'Walk the dog',
          content: 'Go to the park'
        },
        {
          title: 'Do more shopping',
          content: 'Go to Sainsbos and buy more stuff'
        },
        {
          title: 'Walk the dog more',
          content: 'Go to the park more'
        }
      ],
      selectedTodo: null,
      pip: 3
    };
  }
  render() {
    return (
      <div className="to-do">
        <TodoList todos={this.state.todos}
                  deleteTodo={i => this.deleteTodo(i)}
                  selectTodo={i => this.selectTodo(i)}/>
        <TodoForm selectedTodo={this.state.selectedTodo}
                  addTodo={(title, content) => this.addTodo(title, content)}
                  editTodo={(title, content) => this.editTodo(title, content)}
                  deselect={() => this.deselect()}/>
      </div>
    );
  }
  selectTodo(i) {
    this.setState({
      selectedTodo: this.state.todos[i]
    });
  }
  deleteTodo(i) {
    this.setState((prevState) => {
      todos: prevState.todos.splice(i, 1);
    })
  }
  addTodo(title, content) {
    this.setState((prevState) => {
      todos: prevState.todos.push({
        title: title,
        content: content
      });
    })
  }
  editTodo(title, content) {
    let editedTodos = this.state.todos;
    const index = editedTodos.map(function(e) { return e.title; }).indexOf(this.state.selectedTodo.title);
    editedTodos[index].title = title;
    editedTodos[index].content = content;
    this.setState({
      todos: editedTodos
    });
  }
  deselect() {
    this.setState({
      selectedTodo: null
    });
  }
}

export default App;
