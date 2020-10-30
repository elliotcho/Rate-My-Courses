import React, {Component} from 'react';
import {getPostsByCourseId} from '../../store/actions/postActions';
import {getCourseById} from '../../store/actions/courseActions';
import Post from './Post.jsx';
import CreatePost from './CreatePost.jsx';
import './css/PostList.css';

class PostList extends Component{
    constructor(){
        super();

        this.state = {
            course: null,
            posts: []
        }
    }

    async componentDidMount(){
        const courseId = this.props.match.params.id;
        
        const course = await getCourseById(courseId);
        const posts = await getPostsByCourseId(courseId);

        this.setState({
            course,
            posts
        });
    }

    render(){
        const {course, posts} = this.state;
        const {uid} = this.props;

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
                         
                <CreatePost course={course} uid={uid}/>

                <Post/>
                <Post/>
            </div>
        )
    }
}

export default PostList;