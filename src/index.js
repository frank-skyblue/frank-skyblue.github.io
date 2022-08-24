import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Cgi from "./work/Cgi";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />}></Route>
      <Route exact path="/cgi" element={<Cgi />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
