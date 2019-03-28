import React, { Component } from 'react';
import axios from 'axios';
import './homestyle.css';
import Toggle from './Toggle';
import {BrowserRouter as Router, Link,NavLink,Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isToggleOn: "My Post",
            postid: "",
            deleteid: ""
        };
    }

    componentDidMount() {
        

            
            	axios.get("https://jsonplaceholder.typicode.com/posts")

            .then(response => {
                const posts = response.data;
                console.log(posts);
                this.setState({ posts });
            })
            
            
    }
    toggle=()=>{
    	this.state.isToggleOn=="My Post"? this.setState({isToggleOn:"All Post"}) : this.setState({isToggleOn:"My Post"});
   
     if(this.state.isToggleOn=="My Post"){
                axios.get("https://jsonplaceholder.typicode.com/posts?userId=3")

            .then(response => {
                const posts = response.data;
                console.log(posts);
                this.setState({ posts });
            })
            }
            else{
                axios.get("https://jsonplaceholder.typicode.com/posts")

            .then(response => {
                const posts = response.data;
                console.log(posts);
                this.setState({ posts });
            })
            }

    }

    comment=(id)=>{
        this.setState({postid: id });
        
    }

    delete=(id)=>{
       {/*} this.setState({deleteid: id}) */}
        {/*this.setState(prevState => ({ deleteid: [...prevState.deleteid, id] }))*/}

        if (id<=21 ||id>=30) {
            this.setState({posts: this.state.posts.splice(id,9)});
        }
         else {
            this.setState({posts: this.state.posts.splice(id,99)});
        }
        

       
                 
            
        
    }

    render() {

    	
        return (
            <div>
				<div className="topnav">				 
  					<Toggle toggle={this.toggle}/>
                    <button>create post</button>
  				</div>  
  				<div>
  				{this.state.posts.map(post=>
                   <div>
                        <Link to={'/Comment/'+post.id}>
                        <div key={post.id}>
                           <Jobcard title={post.title} body={post.body}/>
                        </div>
                        </Link>
                        <div className="btn">
                        <button onClick={()=>this.delete(post.id)}>delete</button>
                        <button>update</button>
                        </div>
                    </div>
                	)		
				}
				</div>
			</div>
        );
    }
}

export default Home;

class Jobcard extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div>
                
				<div className="content">
  					<div className="jobcard">

  					<h1>{this.props.title}</h1>
  					<article>{this.props.body}</article>
  					</div>	
			</div>
			</div>
        )
    }
}




