import React, {Component} from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import './css/DepartmentTable.css';

class DepartmentTable extends Component{
    constructor(){
        super();

        this.state = {
            departments: [],
            name: '',
            code: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.createDepartment = this.createDepartment.bind(this);
        this.deleteDepartment = this.deleteDepartment.bind(this);
    }

    async componentDidMount(){
        const response = await axios.get('http://localhost:8080/api/department');
        const departments = response.data;

        this.setState({departments : departments.reverse()});
    }

    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    async createDepartment(e){
        e.preventDefault();
        
        const {name, code} = this.state;

        const config = {headers: {'Content-Type': 'application/json'}};

        const response = await axios.post('http://localhost:8080/api/department', {name, code}, config);
        const newDepartment = response.data;

        const {departments} = this.state;
        departments.unshift(newDepartment);

        this.setState({
            departments,
            name: '',
            code: ''
        });
    }

    async deleteDepartment(id){
        const {departments} = this.state;

        const confirmDelete = async () => {
            await axios.delete(`http://localhost:8080/api/department/${id}`);

            for(let i=0;i<departments.length;i++){
                if(departments[i].id === id){
                    departments.splice(i, 1);
                    break;
                }
            }

            this.setState({departments});
        }

        confirmAlert({
            title: 'Rate My Courses',
            message: 'Are you sure you want to delete this department?',
            buttons: [
                {label: 'Yes', onClick: confirmDelete},
                {label: 'No', onClick: () => {return;}}
            ]
        });
    }

    render(){
        const {departments, name, code} = this.state;

        return(
            <div className='department-table'>
                <table>
                    <thead>
                        <th>Department ID</th>
                        <th>Department Name</th>
                        <th>Department Code</th>
                        <th>Create/Delete</th>
                    </thead>

                    <tr>
                        <td>ID Auto Generated</td>

                        <td>
                            <input 
                                id='name' 
                                type='text'
                                onChange={this.handleChange}
                                value={name}
                            />
                        </td>

                        <td>
                            <input 
                                id='code' 
                                type='text' 
                                onChange={this.handleChange}
                                value={code}
                            />
                        </td>

                        <td>
                            <button className ='btn btn-success' onClick={this.createDepartment}>
                                Create
                            </button>
                        </td>
                    </tr>
                    
                    {departments.map(d =>
                        <tr>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.code}</td>

                            <td>
                                <button className='btn btn-danger' onClick={() => this.deleteDepartment(d.id)}>
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

export default DepartmentTable;