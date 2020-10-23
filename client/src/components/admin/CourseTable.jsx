import React, {Component} from 'react';
import {getAllDepartments} from '../../store/actions/departmentActions';
import * as courseActions from '../../store/actions/courseActions';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import './css/CourseTable.css';

class CourseTable extends Component{
    constructor(){
        super();

        this.state = {
            departments: [],
            courses: [],
            number: '',
            name: '',
            departmentId: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    async componentDidMount(){
        const departments = await getAllDepartments();
        const courses = await courseActions.getAllCourses();

        departments.sort((d1, d2) => d1.code.toLowerCase() - d2.code.toLowerCase());
        courses.reverse();

        this.setState({
            departments,
            courses
        });
    }

    handleChange(e){
        this.setState({[e.target.id]: e.target.value})
    }

    async createCourse(){
        const {departmentId, name, number, courses} = this.state;
    
        if(departmentId.trim() === ''){
            return;
        }

        const data = {name, number, departmentId};
        const newCourse = await courseActions.createCourse(data);
        
        if(newCourse !== null){
            courses.unshift(newCourse);
            this.setState({courses});
        }
        
        this.setState({
            name: '',
            number: '',
            departmentId: ''
        });
    }

    async deleteCourse(id){
        const coursesList = this.state.courses;

        const confirmDelete = async () => {
            const {deleteCourse} = courseActions;

            const courses = await deleteCourse(coursesList, id);

            this.setState({courses});
        }

        confirmAlert({
            title: 'Rate My Courses',
            message: 'Are you sure you want to delete this course?',
            buttons: [
                {label: 'Yes', onClick: confirmDelete},
                {label: 'No', onClick: () => {return;}}
            ]
        });
    }

    render(){
        const {departments, courses, number, name, departmentId} = this.state;

        return(
            <div className='course-table'>
                <table>
                    <thead>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Course Number</th>
                        <th>Average Rating</th>
                        <th>Department Code</th>
                        <th>Create/Delete</th>
                    </thead>

                    <tr>
                        <td>ID Auto Generated</td>

                        <td>
                            <input 
                                type='text'
                                id = 'name'
                                onChange = {this.handleChange}
                                value = {name}
                                required
                            />
                        </td>

                        <td>
                            <input 
                                type='text' 
                                id = 'number'
                                onChange = {this.handleChange}
                                value = {number}
                                required
                            />
                        </td>

                        <td>N/A</td>

                        <td>
                            <select onChange={this.handleChange} id='departmentId' value={departmentId}>
                                <option value=''></option>

                                {departments.map(d =>
                                    <option value={d.id}>{d.code}</option>
                                )}
                            </select>
                        </td>

                        <td>
                            <button className ='btn btn-success' onClick={this.createCourse}>
                                Create
                            </button>
                        </td>
                    </tr>

                    {courses.map(c =>
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                            <td>{c.number}</td>
                            <td>N/A</td>
                            <td>{c.departmentCode}</td>      
                            <td>
                                <button className='btn btn-danger' onClick={() => this.deleteCourse(c.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )}
                </table>
            </div>
        )
    }
}
export default CourseTable;