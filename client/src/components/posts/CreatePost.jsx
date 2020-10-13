import React, {Component} from 'react';
import './CreatePost.css';

class CreatePost extends Component{
    constructor(){
        super();
        
    }

    render(){
        return(
            <div className="create-new-post">
                <form className="creating-post">
                    <h2>Create New Post</h2>
                    <label for="course-id">Enter Course Number:</label>
                    <input type="double" id="course-id" name="id"/>
                    <label for="coursetaken">When did you take this course</label>
                    <input type='text' id='coursetake' name="datetaken"/>
                    <label for='content'>Post Content</label>
                    <input type='text' id='content' name='userContent'/>
                    <label for='rating'>Stars</label>
                    <input type='double' id='rating' name='stars'/> {/*also need a function to get current date/time, display t value here*/}
                    <button>Create Post</button>
                </form>
            </div>
        )
    } 
}

export default CreatePost;