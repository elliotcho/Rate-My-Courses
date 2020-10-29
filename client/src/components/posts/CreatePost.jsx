import React, {Component} from 'react';
import './css/CreatePost.css';
import {createPost} from '../../store/actions/postActions';

class CreatePost extends Component{
    constructor(){
        super();
        this.state={
            courseNumber : "",
            year: "",
            prof: "",
            reason: "",
            stars: 0,
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit(e){
        e.preventDefault();
        const { year, courseNumber, prof, reason, stars} = this.state;
        const dateCreated = new Date();
        const likes = [];
        const dislikes= [];
        const data = { courseNumber, year, prof, reason, stars, dateCreated, likes, dislikes };
        if(courseNumber === "Select Course" || prof === "" || reason === "" || stars === "Select Rating"){
            alert("Error: Fill in all values!");
        }
        const post = await createPost(data);
        console.log(post);
    }

    handleChange(e){
        const{name, value} = e.target;
        this.setState({[name]: value });
    }

    render(){
        const { year, courseNumber, prof, reason, stars} = this.state;

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
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="course-id">Course Number</label>
                            
                                    <select className="form-control"
                                        id="course-id"  
                                        value= {courseNumber} 
                                        onChange= {this.handleChange}
                                        name = 'courseNumber'
                                    >
                                        <option value="">Select Course</option>
                                        <option value="cs3305">CS3305</option>
                                        <option value="polisci2244">POLISCI2244</option>
                                        <option value="math1228">MATH1228</option>
                                    </select>
                                </div>
                        
                                <div className="form-group">
                                    <label htmlFor="coursetaken">Year Course Was Taken</label>
                                    <input type='text' 
                                    className="form-control"
                                    id='coursetaken' 
                                    name="year" 
                                    value={year} 
                                    onChange={this.handleChange}/>
                                </div>
                        
                                <div className="form-group">
                                    <label htmlFor="Prof">Professor</label>
                                    <input type='text' 
                                    className="form-control"
                                    id='Prof' 
                                    name="prof"
                                    value={prof}
                                    onChange={this.handleChange}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor='content'>Reason For Rating</label>
                                    <input type='text'
                                     className="form-control"
                                     id='content'
                                      name='reason'
                                       value={reason}
                                        onChange={this.handleChange}/>
                                </div>
                        
                                <div className="form-group">
                                    <label htmlFor='rating'>Stars</label>                            
                                    <select className="form-control"
                                         id="rating"
                                         value = {stars}
                                         onChange = {this.handleChange}
                                         name = 'stars'
                                         >
                                        <option value="">Select Rating</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                        
                                <button type="submit" className="btn btn-success">Submit</button>
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        )
    } 
}

export default CreatePost;