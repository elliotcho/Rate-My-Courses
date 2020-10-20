import React, {Component} from 'react';
import Post from './Post.jsx';
import CreatePost from './CreatePost.jsx';
import './css/PostList.css';

class PostList extends Component{
    render(){
        return(
            <div className="post-list">
                <div className ='my-5 text-center'>
                    <h1>Active posts</h1>

                    <button data-toggle='modal' data-target='#create-post'>
                        Create Post
                    </button> 
                </div>   
                         
                <CreatePost/>

                <Post/>
                <Post/>
            </div>
        )
    }
}

export default PostList;