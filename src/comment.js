import React, { Component } from 'react';
import axios from 'axios';
import './homestyle.css';
import Toggle from './Toggle';
import {BrowserRouter as Router, Link,NavLink,Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            comments:[]
        };
    }

    // performs api call and fetches comments of the click post
    componentDidMount() {
        
            console.log(this.props.match.params.id);
           
            	axios.get("https://jsonplaceholder.typicode.com/comments?postId="+this.props.match.params.id)

            .then(response => {
                const comments = response.data;
                console.log(comments);
                this.setState({ comments });
               
            })
            
            
    }
    



    render() {
    	
        return (
            <div>
                {/* comments page */}
                <h1>Comments</h1>
                {/* to loop the comments*/}
                {this.state.comments.map(comments=>
                    <div>
                    <div className="comment"> 
                    <h2>{comments.name}</h2>
                    <p>{comments.body}</p>
                    </div>
                </div>
                    
                    )       
                }


				
			</div>
        );
    }
}

export default Comment;





