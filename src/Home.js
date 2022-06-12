import Navbar from "./Navbar";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <div>This page is the Home page</div>
      <Link to="login">To login page</Link> <br />
      <Link to="sign-up">To Sign up page</Link>
    </React.Fragment>
  );
}
