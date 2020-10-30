import React, {Component} from 'react';
import './css/Post.css';


class Post extends Component{
    render(){
        return(
            <section className='post'>
                <div className='row'> 
                    <div className="col-3">
                        <h4 id="course-id"> KNES 399</h4>
                        <p className="username">Reviewed By: otw_up</p>
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
        )
    }
}

export default Post;