import React, { Component } from "react";
import PropTypes from "prop-types";

class Todoitem extends Component {
  style = () => {
    return {
      background: "#f4f4f4",
      marginBottom: "1rem",
      padding: "10px",
      borderBottom: "2px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  btnStyle = () => {
    return {
      background: "red",
      color: "#fff",
      padding: "5px 7px",
      float: "right",
      cursor: "pointer",
      textAlign: "center",
      borderRadius: "50%",
      border: "none"
    };
  };

  render = () => {
    //   deconstruct
    const { id, title } = this.props.todo;

    return (
      <div style={this.style()}>
        <h3>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            style={this.btnStyle()}
            onClick={this.props.delTodo.bind(this, id)}
          >
            X
          </button>
        </h3>
      </div>
    );
  };
}

// PropTypes
Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired
};

export default Todoitem;
