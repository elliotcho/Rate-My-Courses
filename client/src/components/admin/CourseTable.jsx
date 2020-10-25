import React, {Component} from 'react';
import {getAllDepartments} from '../../store/actions/departmentActions';
import {getAllCourses} from '../../store/actions/courseActions';
import {createCourse, deleteCourse} from '../../store/actions/adminActions';
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
        const courses = await getAllCourses();

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
        const newCourse = await createCourse(data);
        
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
                        <tr>
                            <th>Course ID</th>
                            <th>Course Name</th>
                            <th>Course Number</th>
                            <th>Average Rating</th>
                            <th>Department Code</th>
                            <th>Create/Delete</th>
                        </tr>
                    </thead>

                    <tbody>
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

                                    {departments.map(department =>
                                        <option value={department.id} key={department.id}>
                                            {department.code}
                                        </option>
                                    )}
                                </select>
                            </td>

                            <td>
                                <button className ='btn btn-success' onClick={this.createCourse}>
                                    Create
                                </button>
                            </td>
                        </tr>

                        {courses.map(course =>
                            <tr key={course.id}>
                                <td>{course.id}</td>
                                <td>{course.name}</td>
                                <td>{course.number}</td>
                                <td>N/A</td>
                                <td>{course.departmentCode}</td>      
                                <td>
                                    <button className='btn btn-danger' onClick={() => this.deleteCourse(course.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default CourseTable;