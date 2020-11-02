import React, {Component} from 'react';
import {getUserById} from '../../store/actions/profileActions';
import {getCourseById} from '../../store/actions/courseActions';
import {deletePostById} from '../../store/actions/postActions';
import moment from 'moment';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import './css/Post.css';

class Post extends Component{
    constructor(){
        super();

        this.state = {
            username: 'Loading User...',
            course: null
        }

        this.deletePost = this.deletePost.bind(this);
    }

    async componentDidMount(){
        const {courseId} = this.props.post;
        const {creatorId} = this.props;

        const user = await getUserById(creatorId);
        const course = await getCourseById(courseId);

        this.setState({
            username: user.username,
            course
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

    render(){
        const {username, course} = this.state;
        const {reason, stars, dateCreated, year, prof} = this.props.post;
        const {uid, creatorId} = this.props;

        return(
            <section className='post mt-5'>
                <div className='row'> 
                    <div className="col-3">
                        <h4 id="course-id">
                            {course? `${course.departmentCode} ${course.number}` : 'Loading...'}
                        </h4>
                        <p className="year">Year Taken: {year}</p>
                        <p className="prof">Professor: {prof}</p>
                        
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
                            {reason} 
                        </p>
                        <p className="username">Reviewed By: {username}</p>
                        <p className="date-posted">{moment(new Date(dateCreated)).calendar()}</p>
                    </div>
                </div>
                <hr/>
                <div className="ratings row">
                    <div className="col-4">
                        <h5 className="likes" >Likes</h5>

                        <button className="likes-btn btn btn-lg btn-outline-success">
                            <i class="fa fa-thumbs-up"></i>
                        </button>
                    </div>
                
                    <div className="col-4">
                        <h5 className="dislikes">Dislikes</h5>
                        <button className="dislikes-btn btn btn-lg btn-outline-danger">
                            <i class="fa fa-thumbs-down"></i>
                        </button>
                    </div>
                
                    <div className="col-4">
                        <h5 className="users-rating">User's Rating</h5>
                        <p className="ratings-score">{`${stars}/5`}</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Post;