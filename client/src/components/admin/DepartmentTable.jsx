import React, {Component} from 'react';
import {getAllDepartments} from '../../store/actions/departmentActions';
import {createDepartment, deleteDepartment} from '../../store/actions/adminActions';
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
        const departments = await getAllDepartments();
        this.setState({departments});
    }

    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    async createDepartment(){   
        const {name, code} = this.state;
        const data = {name, code};
        
       const newDepartment = await createDepartment(data);

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
            const departments = await deleteDepartment(departmentsList, id);
            departments.reverse();
            
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
                        <tr>
                            <th>Department ID</th>
                            <th>Department Name</th>
                            <th>Department Code</th>
                            <th>Create/Delete</th>
                        </tr>
                    </thead>

                    <tbody>
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
                        
                        {departments.map(department =>
                            <tr key={department.id}>
                                <td>{department.id}</td>
                                <td>{department.name}</td>
                                <td>{department.code}</td>

                                <td>
                                    <button className='btn btn-danger' onClick={() => this.deleteDepartment(department.id)}>
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

export default DepartmentTable;