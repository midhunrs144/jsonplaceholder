import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router, Link,NavLink,Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';



import './App.css';



class AddUser extends Component {
    constructor(props) {
      super(props);

   }
     btnclck = () => {
        axios.post('https://reqres.in/api/users', {
                name: this.refs.name.value,
                job: this.refs.job.value
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    render() { 
       
        return (
            <div>
                <div className="LoginMain">
                    <input type="text" ref="name" placeholder="enter name" /><br />
                    <input type="text" ref="job" placeholder="enter job" /><br />
                    <button onClick={this.btnclck}>Add</button>
                </div>
            </div>

            )


    }
}

export default AddUser;