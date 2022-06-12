import React from "react";
import { Link } from "react-router-dom";

export default function Sign() {
  return (
    <React.Fragment>
      <h1>This is the login page</h1>
      <Link to="/">To Home Page</Link> <br />
      <Link to="/sign-up">To Sign up page</Link>
    </React.Fragment>
  );
}
