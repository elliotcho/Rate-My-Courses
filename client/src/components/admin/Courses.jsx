import React, {Component} from 'react';
import './Courses.css';

class Courses extends Component{
    render(){
        return(
            <div className="courses container-fluid">
                <form>
                    <h1>Pick your course</h1>
                    <p> <i>Select the criteria you want</i> </p>
                    <section className="selection">
                        <label htmlFor="department_name">Department Name:</label>
                        <input className="department_name" type="text" placeholder="KNES"/>

                        <label htmlFor="course_number">Course Number:</label>
                        <input className="course_number"type="text" placeholder="399"/>

                        <label className="ratings" htmlFor="ratings">Minimum Rating:</label>
                        <select className="ratings_choice" name="ratings">
                            <option value="ratings">1</option>
                            <option value="ratings">2</option>
                            <option value="ratings">3</option>
                            <option value="ratings">4</option>
                            <option value="ratings">5</option>
                        </select>
                    </section>
                    <button className="btn btn-outline-warning btn-block">Search</button>
                </form>
               
            </div>
        )
    }
}
export default Courses;