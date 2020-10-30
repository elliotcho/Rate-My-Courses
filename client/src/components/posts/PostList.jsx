import React, {Component} from 'react';
import Post from './Post.jsx';
import CreatePost from './CreatePost.jsx';
import './css/PostList.css';

class PostList extends Component{
    componentDidMount(){
        const courseId = this.props.match.params.id;
        
    }

    render(){
        return(
            <div className="post-list">
                <header className='row my-5'>
                    <h1 className='col-5'>
                        Active posts
                    </h1>

                    <div className='col-5'></div>

                    <div className ='col-2 my-auto'>
                        <button className='btn' data-toggle='modal' data-target='#create-post'>
                            <span>+</span>
                        </button> 
                    </div>
                </header>   
                         
                <CreatePost/>

                <Post/>
                <Post/>
            </div>
        )
    }
}

export default PostList;