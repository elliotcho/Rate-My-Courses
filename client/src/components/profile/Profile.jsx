import React, {Component} from 'react';
import "./css/Profile.css";

class Profile extends Component {
    render() {
        return (
            <div className="profile-pg container-fluid">
                <section className="user-profile">
                    <i className="icon fas fa-user-graduate fa-3x m-2"></i>
                    <h4 className="icon name mb-5">otw_up</h4>
                    <p className="user-info"># of courses rated: 69</p>
                    <p className="user-info">Average rating given: 6.9/10</p>
                    <p className="user-info">Likes to dislikes ratio: 4/1</p>
                    <p className="user-info">Year of study: 4th</p>
                    <p className="user-info">Program type: Undergraduate</p>
                </section>
                <h1>Previous Posts</h1>
                <section className="prev-posts">
                    <div className='row'> 
                        <div className="col-3">
                            <h4 id="course-id"> KNES 399</h4>
                        </div>     
                    
                        <div className="col-9">
                            <p className="review">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p className="date-posted">Sept 24, 2020</p>
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
                            <p className="ratings-score">10/10</p>
                        </div>
                    </div>
                </section>     
            </div>
        )
    }
}


export default Profile;