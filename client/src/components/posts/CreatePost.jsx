import React, {Component} from 'react';
import './css/CreatePost.css';

class CreatePost extends Component{
    render(){
        return(
            <div className='post-modal modal fade' id='create-post' data-backdrop='false'>
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h3>Create Post</h3>

                            <button id='close-create-post' className='close' data-dismiss='modal'>
                                <span>&times;</span>
                            </button>
                        </div>

                        <div className='modal-body'>
                            <form>
                                <div className="form-group">
                                    <label for="course-id">Course Number</label>
                            
                                    <select className="form-control"name="course-id" id="course-id">
                                        <option value="">Select Course</option>
                                        <option value="cs3305">CS3305</option>
                                        <option value="polisci2244">POLISCI2244</option>
                                        <option value="math1228">MATH1228</option>
                                    </select>
                                </div>
                        
                                <div className="form-group">
                                    <label for="coursetaken">Year Course Was Taken</label>
                                    <input type='text' className="form-control"id='coursetaken' name="datetaken"/>
                                </div>
                        
                                <div className="form-group">
                                    <label for="Prof">Professor</label>
                                    <input type='text' className="form-control"id='Prof' name="Prof"/>
                                </div>

                                <div className="form-group">
                                    <label for='content'>Reason For Rating</label>
                                    <input type='text' className="form-control"id='content' name='userContent'/>
                                </div>
                        
                                <div className="form-group">
                                    <label for='rating'>Stars</label>
                                    <input type='double' className="form-control" id='rating' name='stars'/>{/*also need a function to get current date/time, display t value here*/}
                                </div>
                        
                                <div className="but">
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>        
            </div>
        )
    } 
}

export default CreatePost;