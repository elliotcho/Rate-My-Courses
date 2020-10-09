import React, {Component} from 'react';
import Post from './Post.jsx';
import './PostList.css';

class PostList extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="post-list">
                <Post/> 
            </div>
        )
    }
}

export default PostList;