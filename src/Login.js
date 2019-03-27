import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Login extends Component {

    btnclick = () => {
        axios.post("https://reqres.in/api/login", {
                email: this.refs.email.value,
                password: this.refs.pwd.value
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="main">
      			<div id="login">
      				<p className="loginHead">LOG IN</p>
      				<input type="email" id="mail" ref="email" placeholder="Enter Email ID"/>
      				<br/>
      				<input type="password" id="pwd" ref="pwd" placeholder="Enter Password"/>
      				<br/>
      				<button onClick={this.btnclick}>Login</button>
        		</div>
      		</div>
        );
    }
}

export default Login;