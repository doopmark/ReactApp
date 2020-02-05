import React, { Component } from "react";
import Todoitem from "./Todoitem";
import PropTypes from "prop-types";

class Todos extends Component {
  todoList = () => {
    let todolist = this.props.todos.map((todo, i) => {
      return (
        <Todoitem
          key={todo.id}
          todo={todo}
          markComplete={this.props.markComplete}
          delTodo={this.props.delTodo}
        />
      );
    });
    return todolist;
  };
  render() {
    return <div>{this.todoList()}</div>;
  }
}

// PropTypes
Todos.propTypes = { todos: PropTypes.array.isRequired };

export default Todos;
