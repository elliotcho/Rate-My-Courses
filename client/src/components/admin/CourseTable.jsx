import React, {Component} from 'react';
import axios from 'axios';
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

        this.createCourse = this.createCourse.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount(){
        let response = await axios.get('http://localhost:8080/api/department');
        const departments = response.data;

        response = await axios.get('http://localhost:8080/api/course');
        const courses = response.data;

        courses.forEach( async (course, i) => {
            const route = `http://localhost:8080/api/department/code/${course.id}`;
            const response = await axios.get(route);

            courses[i].departmentCode = response.data;
        });

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
        const {name, number, departmentId, courses} = this.state;
    
        if(name.trim() === '' || number.trim() === '' || departmentId.trim() === ''){
            return;
        }

        const data = {
            name,
            number,
            departmentId
        };

        const config = {headers: {'Content-Type': 'application/json'}};
        const response = await axios.post('http://localhost:8080/api/course', data, config);
        const newCourse = response.data;

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
                            />
                        </td>

                        <td>
                            <input 
                                type='text' 
                                id = 'number'
                                onChange = {this.handleChange}
                                value = {number}
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
                                <button className='btn btn-danger' onClick={() => this.deleteDepartment(c.id)}>
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