import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>My Todolist</h1>
      <Link style={linkSyle} to="/">
        Home
      </Link>{" "}
      ||{" "}
      <Link style={linkSyle} to="/About">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "teal",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const linkSyle = {
  color: "#fff",
  textTransfor: "uppercase",
  margin: "1rem .5rem",
  textDecoration: "none"
};
export default Header;
