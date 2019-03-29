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

        //to perform api call for fetching all posts and stores in state.

    componentDidMount() {
        

            
            	axios.get("https://jsonplaceholder.typicode.com/posts")

            .then(response => {
                const posts = response.data;
                console.log(posts);
                this.setState({ posts });
            })
            
            
    }
    
    // to toggle between myposts and all posts

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

    // to delete a post

    delete=(index)=>{
            
         let del = this.state.posts;
         console.log("hhh"+del);
         del.splice(index,1);
         console.log("hfg"+del);
          this.setState({posts: del})

           {/*} id= id-1;
    let array = (post,id) => {
            return post != id;
                }
    let myFunction = () => {
     this.setState({posts: this.state.posts.filter(array)});
            }  */}
         
        
   
    }

    render() {

    	
        return (
            <div>
                {/* home page */}
				<div className="topnav">				 
  					<Toggle toggle={this.toggle}/>
                    <Link to ="/Create" ><button>create post</button></Link>
  				</div>  
  				<div> 
                {/* for looping the posts */}
  				{this.state.posts.map(post=>
                   <div>
                        {/* link to view comments */}
                        <Link to={'/Comment/'+post.id}>
                        <div key={post.id}>
                           <Jobcard title={post.title} body={post.body}/>
                        </div>
                        </Link>
                        <div className="btn">
                    {/* conditional rendering-- shows delete button only for my posts */}
                       {post.userId==3?  
                        <button onClick={()=>this.delete(post.id-1)}>delete</button>:null}
                         <Link to={'/Update/'+post.id}><button>update</button></Link>
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
                {/* jobcard */}
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




