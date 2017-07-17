import React, { Component } from 'react';
import { ToDoList } from './components/ToDoList';
import { ToDoForm } from './components/ToDoForm';
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
        }
      ]
    };
  }
  render() {
    return (
      <div className="to-do">
        <ToDoList todos={this.state.todos}
                  deleteToDo={i => this.deleteToDo(i)}/>
        <ToDoForm />
      </div>
    );
  }
  deleteToDo(i) {
    console.log('deleting');
    this.state.todos.splice(i, 1);
  }
}

export default App;
