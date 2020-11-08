import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPostById, reloadPosts} from '../../store/actions/postActions';
import Post from './Post';
import './css/PostDetails.css';

class PostDetails extends Component{
    constructor(){
        super();
        this.toPostList = this.toPostList.bind(this);
        this.editPostInReducer = this.editPostInReducer.bind(this);
    }

    async componentDidMount(){
        const {postId} = this.props.match.params;
        const {dispatch} = this.props;
        
        dispatch(getPostById(postId));
    }

    toPostList(){
        const {posts} = this.props;

        if(posts.length > 0){
            this.props.history.push(`/posts/${posts[0].courseId}`);
        }
    }

    editPostInReducer(postId, newReason){
        const {dispatch, posts} = this.props;

        if(posts[0] && posts[0].id === postId){
            posts[0].reason = newReason;
        }

        dispatch(reloadPosts(posts));
    }

    render(){
        const {uid} = this.props;
        const {posts} = this.props;;

        return(
            <div className ='post-details'>
               {posts.length > 0?
                    posts.map(post => 
                            (<Post
                                uid={uid}
                                post={post}
                                creatorId={post.userId}
                                removePostFromList = {this.toPostList}
                                editPostInReducer = {this.editPostInReducer}
                                seeMore = {true}
                            />) 
                    ): null
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

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);