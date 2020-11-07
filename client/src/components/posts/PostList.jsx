import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPostsByCourseId, reloadPosts} from '../../store/actions/postActions';
import {getCourseById} from '../../store/actions/courseActions';
import Post from './Post.jsx';
import CreatePost from './CreatePost.jsx';
import './css/PostList.css';

class PostList extends Component{
    constructor(){
        super();

        this.state = {
            course: null
        }

        this.addPost = this.addPost.bind(this);
        this.removePostFromList = this.removePostFromList.bind(this);
    }

    async componentDidMount(){
        const {courseId} = this.props.match.params;
        const {dispatch} = this.props;

        //load posts into global state
        dispatch(getPostsByCourseId(courseId));

        const course = await getCourseById(courseId);
        this.setState({course});
    }

    addPost(newPost){
        const {dispatch, posts} = this.props;

        posts.unshift(newPost);

        dispatch(reloadPosts(posts));
    }

    removePostFromList(id){
        const {dispatch, posts} = this.props;

        for(let i=0;i<posts.length;i++){
            if(posts[i].id === id){
                posts.splice(i, 1);
                break;
            }
        }

        dispatch(reloadPosts(posts));
    }

    render(){
        const {course} = this.state;
        const {uid, posts} = this.props;

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

                {posts.length > 0?
                    posts.map(post => 
                        <Post
                            key={post.id}
                            uid={uid}
                            post={post}
                            creatorId={post.userId}
                            removePostFromList = {this.removePostFromList}
                            seeMore = {false}
                        />    
                    ) : <h2>No reviews available for this course</h2>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        uid: state.auth.uid,
        posts: state.post.posts
    }
}

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);