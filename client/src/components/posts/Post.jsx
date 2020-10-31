import React, {Component} from 'react';
import {getUserById} from '../../store/actions/profileActions';
import moment from 'moment';
import './css/Post.css';

class Post extends Component{
    constructor(){
        super();

        this.state = {
            username: 'Loading User...'
        }
    }

    async componentDidMount(){
        const {userId} = this.props;

        const user = await getUserById(userId);

        this.setState({username: user.username});
    }

    render(){
        const {username} = this.state;
        const {course, reason, stars, dateCreated} = this.props;

        return(
            <section className='post'>
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