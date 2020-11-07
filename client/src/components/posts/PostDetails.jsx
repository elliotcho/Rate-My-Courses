import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPostById} from '../../store/actions/postActions';
import Post from './Post';
import './css/PostDetails.css';

class PostDetails extends Component{
    constructor(){
        super();

        this.state = {
            post: null
        }

        this.toPostList = this.toPostList.bind(this);
    }

    async componentDidMount(){
        const {postId} = this.props.match.params;

        const post = await getPostById(postId);

        this.setState({post});
    }

    toPostList(){
        const {post} = this.state;
        this.props.history.push(`/posts/${post.courseId}`);
    }

    render(){
        const {uid} = this.props;
        const {post} = this.state;

        return(
            <div className ='post-details'>
               {post? 
                     (<Post
                         uid={uid}
                         post={post}
                         creatorId={post.userId}
                         removePostFromList = {this.toPostList}
                         seeMore = {true}
                    />) : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({uid: state.auth.uid});

export default connect(mapStateToProps)(PostDetails);