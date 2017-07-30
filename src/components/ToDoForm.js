import React, { Component } from 'react';

export class TodoForm extends React.Component {

  _defaultState = {
    editingTitle: "",
    title: "",
    content: ""
  };

  constructor(props) {
    super(props);
    this.state = this._defaultState;
  }

  /**
   * This may fire even when props have not changed so always compare
   */
  componentWillReceiveProps(nextProps) {
    console.log('receiving props');
    if (nextProps.selectedTodo && this.state.editingTitle !== nextProps.selectedTodo.title) {
      this.setState({
        editingTitle: nextProps.selectedTodo.title,
        title: nextProps.selectedTodo.title,
        content: nextProps.selectedTodo.content
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.selectedTodo) {
      this.props.editTodo(this.state.title, this.state.content);
    } else {
      this.props.addTodo(this.state.title, this.state.content);
    }
    console.log('default!');
    this.setState(this._defaultState);
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" value={this.state.title} onChange={this.handleInputChange} type="text" />
        <textarea name="content" value={this.state.content} onChange={this.handleInputChange} rows="3" />
        {this.props.selectedTodo ? (
          <div>
            <input type="submit" value="Update" />
            <button onClick={this.props.deselect}>Cancel</button>
          </div>
        ) : (
          <input type="submit" value="Add" />
        )}

      </form>
    );
  }
}
