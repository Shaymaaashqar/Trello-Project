import React from "react";
//import "./App.css";
import SignUp from "./Signup";
import SignIn from "./Sign";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/login" element={<SignIn />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
