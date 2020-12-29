import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";


const app = (
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
);

ReactDOM.render(app,document.getElementById('root'));