import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Cgi from "./work/Cgi";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/cgi" element={<Cgi />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
