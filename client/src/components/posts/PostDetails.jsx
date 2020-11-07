import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPostById} from '../../store/actions/postActions';
import Post from './Post';
import './css/PostDetails.css';

class PostDetails extends Component{
    constructor(){
        super();
        this.toPostList = this.toPostList.bind(this);
    }

    async componentDidMount(){
        const {postId} = this.props.match.params;
        const {dispatch} = this.props;
        
        dispatch(getPostById(postId));
    }

    toPostList(){
        const {post} = this.state;
        this.props.history.push(`/posts/${post.courseId}`);
    }

    render(){
        const {uid} = this.props;
        const {posts} = this.props;;

        return(
            <div className ='post-details'>
               {posts.map(post => 
                     (<Post
                         uid={uid}
                         post={post}
                         creatorId={post.userId}
                         removePostFromList = {this.toPostList}
                         seeMore = {true}
                    />) 
               )}
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

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);