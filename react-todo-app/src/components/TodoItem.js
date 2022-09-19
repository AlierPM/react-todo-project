import React from 'react';

class TodoItem extends React.PureComponent {
  render() {
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    return <li>{this.props.todo.title}</li>;
  }
}

export default TodoItem;
