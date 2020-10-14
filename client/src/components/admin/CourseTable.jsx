import React, {Component} from 'react';
import axios from 'axios';
import './css/CourseTable.css';

class CourseTable extends Component{
    constructor(){
        super();

        this.state = {
            departments: []
        }
    }

    async componentDidMount(){
        const response = await axios.get('http://localhost:8080/api/department');
        const departments = response.data;

        departments.sort((d1, d2) => d1.code.toLowerCase() - d2.code.toLowerCase());

        this.setState({departments});
    }

    render(){
        const {departments} = this.state;

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
                            />
                        </td>

                        <td>
                            <input 
                                type='text' 
                            />
                        </td>

                        <td>N/A</td>

                        <td>
                            <select>
                                <option value=''>Select a department</option>

                                {departments.map(d =>
                                    <option value={d.id}>{d.code}</option>
                                )}
                            </select>
                        </td>

                        <td>
                            <button className ='btn btn-success'>
                                Create
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default CourseTable;