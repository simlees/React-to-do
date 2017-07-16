import React, { Component } from 'react';

// Inline map
export class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: false};
  }
  render() {
    return (
      <ul>
        {numbers.map((number) =>
          <ListItem key={number.toString()}
                    value={number} />
        )}
      </ul>
    );
  }
}