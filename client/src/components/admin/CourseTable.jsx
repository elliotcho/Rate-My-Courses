import React, {Component} from 'react';
import axios from 'axios';
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
        let response = await axios.get('http://localhost:8080/api/department');
        const departments = response.data;

        response = await axios.get('http://localhost:8080/api/course');
        const courses = response.data;

        for(let i=0;i<courses.length;i++){
            const {departmentId} = courses[i];

            const response = await axios.get(`http://localhost:8080/api/department/${departmentId}`);
            const {code} = response.data;
           
            courses[i].departmentCode = code;
        }

        departments.sort((d1, d2) => d1.code.toLowerCase() - d2.code.toLowerCase());

        this.setState({
            departments,
            courses: courses.reverse()
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

        const data = {
            name,
            number,
            departmentId
        };

        const config = {headers: {'Content-Type': 'application/json'}};
        let response = await axios.post('http://localhost:8080/api/course', data, config);
        const newCourse = response.data;

        if(newCourse !== null){
            courses.unshift(newCourse);

            response = await axios.get(`http://localhost:8080/api/department/${newCourse.departmentId}`);
            const {code} = response.data;

            newCourse.departmentCode = code;

            this.setState({courses});
        }
        
        this.setState({
            name: '',
            number: '',
            departmentId: ''
        });
    }

    async deleteCourse(id){
        const {courses} = this.state;

        const confirmDelete = async () => {
            await axios.delete(`http://localhost:8080/api/course/${id}`);

            for(let i=0;i<courses.length;i++){
                if(courses[i].id === id){
                    courses.splice(i, 1);
                    break;
                }
            }

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