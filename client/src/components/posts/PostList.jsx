import React, {Component} from 'react';
import {connect} from 'react-redux';
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

        this.addPost = this.addPost.bind(this);
    }

    async componentDidMount(){
        const courseId = this.props.match.params.id;
        
        const posts = await getPostsByCourseId(courseId);
        const course = await getCourseById(courseId);

        this.setState({
            posts, 
            course
        });
    }

    async addPost(newPost){
        const {posts} = this.state;

        posts.push(newPost);

        this.setState({posts});
    }

    render(){
        const {course, posts} = this.state;
        const {uid} = this.props;

        let title;

        if(course){
            title = `${course.departmentCode} ${course.number}: ${course.name}`;
        }

        return(
            <div className="post-list">
                <header className='row my-5'>
                    <h1 className='col-5'>
                        {title? title: 'Loading...'}
                    </h1>

                    <div className='col-5'></div>

                    <div className ='col-2 my-auto'>
                        <button className='btn' data-toggle='modal' data-target='#create-post'>
                            <span>+</span>
                        </button> 
                    </div>
                </header>   
                         
                <CreatePost 
                    uid={uid}
                    course={course} 
                    addPost = {this.addPost}
                />

                {posts.map(post => 
                    <Post
                    
                    />    
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({uid: state.auth.uid});

export default connect(mapStateToProps)(PostList);