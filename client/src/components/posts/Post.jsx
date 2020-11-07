import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {getUserById} from '../../store/actions/profileActions';
import {getCourseById} from '../../store/actions/courseActions';
import {deletePostById, dislikePost, likePost, getLikeStatus, updatePost} from '../../store/actions/postActions';
import PostSettings from './PostSettings';
import EditModal from './EditModal';
import moment from 'moment';
import { confirmAlert } from 'react-confirm-alert';
import { withAlert } from 'react-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import './css/Post.css';

class Post extends Component{
    constructor(){
        super();

        this.state = {
            username: 'Loading User...',
            course: null,
            userLiked: false,
            userDisliked: false,
            likes: [], 
            dislikes: []
        }

        this.deletePost = this.deletePost.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
        this.toPostDetails = this.toPostDetails.bind(this);
        this.editPost = this.editPost.bind(this);
    }

    async componentDidMount(){
        const {uid, creatorId, post} = this.props;

        const user = await getUserById(creatorId);
        const course = await getCourseById(post.courseId);
        const status = await getLikeStatus(uid, post.id);

        const likes = post.likes;
        const dislikes = post.dislikes;

        this.setState({
            username: user.username,
            course,
            userLiked: status[0],
            userDisliked: status[1],
            likes,
            dislikes
        });
    }

    async componentDidUpdate(prevProps){
        const {uid, post} = this.props;

        if((!prevProps.uid && uid) || (prevProps.uid && !uid)){
            const status = await getLikeStatus(uid, post.id);

            this.setState({
                userLiked: status[0],
                userDisliked: status[1]
            });
        }
    }

    deletePost(){
        const {id} = this.props.post;
        const {removePostFromList} = this.props;

        const confirmDelete = async () => {
            await deletePostById(id);
            removePostFromList(id);
        }

        confirmAlert({
            title: 'Rate My Courses',
            message: 'Are you sure you want to delete this post?',
            buttons: [
                {label: 'Yes', onClick: confirmDelete},
                {label: 'No', onClick: () => {return;}}
            ]
        });
    }

    async handleLike(){
        const {likes, dislikes} = this.state;
        const {uid, post, updateLikesRatio} = this.props;

        const postId = post.id;

        if(!uid){
            this.props.alert.error('User must be signed in to like a post');
            return;
        }

        const flags = await likePost(uid, postId);

        let userLiked, userDisliked;

        //unliking the post
        if(flags[0]){
            likes.splice(likes.indexOf(uid), 1);
            userLiked = false;
        } 
        
        //liking the post
        else {
           likes.push(uid);
           userLiked = true;
        }

        //removing dislike
        if(flags[1]){
            dislikes.splice(dislikes.indexOf(uid), 1);
            userDisliked = false;
        }

        //update likes ratio on profile
        if(updateLikesRatio){
            await updateLikesRatio();
        }

        this.setState({userLiked, userDisliked, likes, dislikes});
    }

    async handleDislike(){
        const {likes, dislikes} = this.state;
        const{uid, post, updateLikesRatio} = this.props;

        const postId = post.id;

        if(!uid){
            this.props.alert.error('User must be signed in to dislike a post');
            return;
        } 

        const flags  = await dislikePost(uid, postId);

        let userLiked, userDisliked;

        //cancelling dislike
        if(flags[1]){
            dislikes.splice(dislikes.indexOf(uid), 1);
            userDisliked = false;
        } 
        
        //disliking post
        else {
            dislikes.push(uid);
            userDisliked = true;
        }

        //cancelling like
        if(flags[0]){
            likes.splice(likes.indexOf(uid), 1);
            userLiked = false;
        }

        //update likes ratio on profile
        if(updateLikesRatio){
            await updateLikesRatio();
        }

        this.setState({userLiked, userDisliked, likes, dislikes});
    }

    toPostDetails(){
        const {post} = this.props;
        this.props.history.push(`/post/${post.id}`);
    }

    async editPost(newReason){
        const{post} = this.props;

        const updated = await updatePost(post.id, newReason);

        if(updated){
            window.location.reload();
        }
    }

    render(){
        const {username, course, userLiked, userDisliked, likes, dislikes} = this.state;
        const {uid, creatorId, post, seeMore} = this.props;

        const greenClass = (userLiked) ? 'btn-success' : 'btn-outline-success';
        const redClass = (userDisliked) ? 'btn-danger' : 'btn-outline-danger';

        return(
            <section className='post mt-5'>
                <div className='row'> 
                    <div className="col-3">
                        <h4 id="course-id">
                            {course? `${course.departmentCode} ${course.number}` : 'Loading...'}
                        </h4>

                        {post.year? 
                            (<p className="year">
                                Year Taken: {post.year}
                            </p>) :
                            null
                        }

                        <p className="prof">Professor: {post.prof}</p>
                    </div>     
                
                    <div className="col-9">
                        {uid === creatorId? 
                            (<PostSettings deletePost={this.deletePost}/>) :
                            (<div style={{height: '2rem'}}/>)
                        }

                        <p className="review">
                            {post.reason.length > 425 && !seeMore? 
                                (<div>
                                    {post.reason.substring(0, 422) + '... '}

                                    <span className='see-more' onClick={this.toPostDetails}>
                                        See More
                                    </span>
                                </div>) : post.reason
                            }
                       </p>

                        <p className="username">
                            Reviewed By: {username}
                        </p>

                        <p className="date-posted">
                            {moment(new Date(post.dateCreated)).calendar()}
                        </p>
                    </div>
                </div>
                <hr/>
                <div className="ratings row">
                    <div className="col-4">
                        <h5 className="likes" >Likes</h5>

                        <button className={`likes-btn btn btn-lg ${greenClass}`} onClick={this.handleLike}>
                            <i className = "fa fa-thumbs-up"></i>
                        </button>

                        <p className='likes-count'>
                            {likes.length !== 0 ? 
                                likes.length:
                                null
                            }
                        </p>
                    </div>
                
                    <div className="col-4">
                        <h5 className="dislikes">Dislikes</h5>

                        <button className={`dislikes-btn btn btn-lg ${redClass}`} onClick={this.handleDislike}>
                            <i className = "fa fa-thumbs-down"></i>
                        </button>

                        <p className='dislikes-count'>
                            {dislikes.length !== 0 ?
                                dislikes.length:
                                null
                            }
                        </p>
                    </div>
                
                    <div className="col-4">
                        <h5 className="users-rating">User's Rating</h5>
                        <p className="ratings-score">{`${post.stars}/5`}</p>
                    </div>
                </div>

                <button 
                    id='open-edit'
                    data-toggle='modal' 
                    data-target='#edit' 
                    style = {{visibility: 'hidden'}}
                />

                <EditModal 
                    reason={post.reason}
                    editPost = {this.editPost}
                />
            </section>
        )
    }
}

export default withRouter(withAlert()(Post));