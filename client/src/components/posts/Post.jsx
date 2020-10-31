import React, {Component} from 'react';
import {getUserById} from '../../store/actions/profileActions';
import {getCourseById} from '../../store/actions/courseActions';
import moment from 'moment';
import './css/Post.css';

class Post extends Component{
    constructor(){
        super();

        this.state = {
            username: 'Loading User...',
            course: null
        }
    }

    async componentDidMount(){
        const {userId, courseId} = this.props;

        const user = await getUserById(userId);
        const course = await getCourseById(courseId);

        this.setState({
            username: user.username,
            course
        });
    }

    render(){
        const {username, course} = this.state;
        const {reason, stars, dateCreated} = this.props;

        return(
            <section className='post mt-5'>
                <div className='row'> 
                    <div className="col-3">
                        <h4 id="course-id">
                            {course? `${course.departmentCode} ${course.number}` : 'Loading...'}
                        </h4>

                        <p className="username">Reviewed By: {username}</p>
                    </div>     
                
                    <div className="col-9">
                        <p className="review">
                            {reason} 
                        </p>
                        
                        <p className="date-posted">{moment(new Date(dateCreated)).calendar()}</p>
                    </div>
                </div>
                
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