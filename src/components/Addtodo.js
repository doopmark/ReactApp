import React, { Component } from "react";

class Addtodo extends Component {
  state = {
    title: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
    e.target.value = "";
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add new task"
          onChange={this.onChange}
          value={this.state.title}
          style={{ flex: "10", padding: "5px" }}
        />
        <input type="submit" value="Submit" className="btn" />
      </form>
    );
  }
}

export default Addtodo;
