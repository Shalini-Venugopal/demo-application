import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Redirect
} from "react-router-dom";
import Login from "./Login"
import Home from "./Home";
import Counter from "./Counter";
import Indecision from "./Indecision";
import PostOffice from "./PostOffice";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Demo Application</h1>
          <ul className="header">
          <li><NavLink exact to="/">Login</NavLink></li>
            <li><NavLink  to="/home">Home</NavLink></li>
            <li><NavLink to="/stuff">Counter</NavLink></li>
            <li><NavLink to="/contact">Indecision</NavLink></li>
            <li><NavLink to="/postoffice">Post Office</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Login}/>
            <Redirect from ="/" to ="/home" />
            <Route path="/home" component={Home}/>
            <Route path="/stuff" component={Counter}/>
            <Route path="/contact" component={Indecision}/>
            <Route path="/postoffice" component={PostOffice}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;