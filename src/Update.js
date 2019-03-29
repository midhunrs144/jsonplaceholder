import React, { Component } from 'react';
import {BrowserRouter as Router, Link,NavLink,Redirect} from 'react-router-dom';
import axios from 'axios';
import './homestyle.css';

class Update extends Component {
    constructor(props) {
        super(props);

    }
    // to load default values

    componentDidMount() {

    
            axios.get("https://jsonplaceholder.typicode.com/posts/"+this.props.match.params.id)

                .then(response => {
                    const posts = response.data;
                    console.log(posts);
                    this.setState({ posts });
                    this.refs.title.value=this.state.posts.title;
                    this.refs.body.value=this.state.posts.body;
                })
        }
        
        //to perform api call and updates new changes
    updatePost=()=>{
		axios.put("https://jsonplaceholder.typicode.com/posts/"+this.props.match.params.id,{
			id: this.props.match.params.id,
      		title: this.refs.title.value,
      		body: this.refs.body.value,
      		userId: 3
		})

		

                .then(response => {
                  alert("updated");
                    const update = response.data;
                    console.log(update);
                    this.setState({ update});
                })
        
    }

    render() {

        return (
               <div>
                    {/*update page*/}
				  <div className="content">
  					  <div className="jobcard">
  					     <textarea type="text"  ref="title" placeholder="Update Title"></textarea>
  					     <br/>
  					     <textarea type="text" rows="4" style={{width:500+"px"}} ref="body" placeholder="Update Body"></textarea>
  					     <button onClick={this.updatePost}>Update</button>
  					
  					   </div>	
			      </div>
			   </div>
        )
    }
}
export default Update;


