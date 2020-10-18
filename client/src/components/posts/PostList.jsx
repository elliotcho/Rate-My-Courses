import React, {Component} from 'react';
import Post from './Post.jsx';
import './css/PostList.css';

class PostList extends Component{
    render(){
        return(
            <div className="post-list">
                <h1 className ='my-5'>Active posts</h1>

                <Post/>

                <Post/>
            </div>
        )
    }
}

export default PostList;