import React, {Component} from 'react';
import * as departmentActions from '../../store/actions/departmentActions';
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
        const departments = await departmentActions.getAllDepartments();
        this.setState({departments});
    }

    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    async createDepartment(){    
        const {name, code} = this.state;

       const newDepartment = await departmentActions.createDepartment(name, code);

        const {departments} = this.state;
        departments.unshift(newDepartment);

        this.setState({
            departments,
            name: '',
            code: ''
        });
    }

    async deleteDepartment(id){
        const departmentsList = this.state.departments;

        const confirmDelete = async () => {
            const {deleteDepartment} = departmentActions;

            const departments = await deleteDepartment(departmentsList, id);
            
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
                                required
                            />
                        </td>

                        <td>
                            <input 
                                id='code' 
                                type='text' 
                                onChange={this.handleChange}
                                value={code}
                                required
                            />
                        </td>

                        <td>
                            <button className ='btn btn-success' onClick={this.createDepartment}>
                                Create
                            </button>
                        </td>
                    </tr>
                    
                    {departments.map(d =>
                        <tr key={d.id}>
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