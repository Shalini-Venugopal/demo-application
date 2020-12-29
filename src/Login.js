import React, { Component } from "react";
import './Login.css';


class Login extends React.Component{
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
      
      
                this.props.history.push('/home');
            
           
        
    }
    render(){
      return(
        <div className="container">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <form class="box" onSubmit={this.handleSubmit}>
                                <h1>Login</h1>
                                    <input type="text" name="" placeholder="Username" required /> 
                                    <input type="password" name="" placeholder="Password" required /> 
                                    <button type="submit" onSubmit="handleSubmit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
        </div> 
      );
    }
  }
  
export default Login;