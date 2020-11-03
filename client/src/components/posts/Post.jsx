import React, {Component} from 'react';
import {getUserById} from '../../store/actions/profileActions';
import {getCourseById} from '../../store/actions/courseActions';
import {deletePostById, dislikePost, likePost, getLikeStatus} from '../../store/actions/postActions';
import moment from 'moment';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import './css/Post.css';

class Post extends Component{
    constructor(){
        super();

        this.state = {
            username: 'Loading User...',
            course: null,
            userLiked: false,
            userDisliked: false
        }

        this.deletePost = this.deletePost.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
    }

    async componentDidMount(){
        const {uid, creatorId, post} = this.props;

        const user = await getUserById(creatorId);
        const course = await getCourseById(post.courseId);
        const status = await getLikeStatus(uid, post.id);

        this.setState({
            username: user.username,
            course,
            userLiked: status[0],
            userDisliked: status[1]
        });
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
        const {uid, post} = this.props;

        const postId = post.id;

        if(!uid){
            alert('User must be signed in to like a post');
            return;
        }

        const flags = await likePost(uid, postId);

        if(flags[0]){
            this.setState({userLiked: false});
        } else {
            this.setState({userLiked: true});
        }

        if(flags[1]){
            this.setState({userDisliked: false});
        }
    }

    async handleDislike(){
        const{uid, post} = this.props;
        const postId = post.id;

        if(!uid){
            alert('User must be signed in to dislike a post');
            return;
        }

        const flags  = await dislikePost(uid, postId);

        if(flags[1]){
            this.setState({userDisliked: false});
        } else {
            this.setState({userDisliked: true});
        }

        if(flags[0]){
            this.setState({userLiked: false});
        }
    }

    render(){
        const {username, course, userLiked, userDisliked} = this.state;
        const {uid, creatorId, post} = this.props;

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
                            (<div className='text-right pt-3 pr-5'>
                               <button className='btn btn-danger' onClick={this.deletePost}>
                                   Delete
                               </button>
                           </div>) :
                           (<div style={{height: '2rem'}}/>)
                        }

                        <p className="review">
                            {post.reason} 
                        </p>
                        <p className="username">Reviewed By: {username}</p>
                        <p className="date-posted">{moment(new Date(post.dateCreated)).calendar()}</p>
                    </div>
                </div>
                <hr/>
                <div className="ratings row">
                    <div className="col-4">
                        <h5 className="likes" >Likes</h5>

                        <button className="likes-btn btn btn-lg btn-outline-success" onClick={this.handleLike}>
                            <i className = "fa fa-thumbs-up"></i>
                            {userLiked? 'LIKED': null}
                        </button>
                    </div>
                
                    <div className="col-4">
                        <h5 className="dislikes">Dislikes</h5>
                        <button className="dislikes-btn btn btn-lg btn-outline-danger" onClick={this.handleDislike}>
                            <i className = "fa fa-thumbs-down"></i>
                            {userDisliked? 'DISIKED': null}
                        </button>
                    </div>
                
                    <div className="col-4">
                        <h5 className="users-rating">User's Rating</h5>
                        <p className="ratings-score">{`${post.stars}/5`}</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Post;