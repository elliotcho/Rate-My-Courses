import React, {Component} from 'react';
import axios from 'axios';
import './css/DepartmentTable.css';

class DepartmentTable extends Component{
    constructor(){
        super();

        this.state = {
            deparments: [],
            name: '',
            code: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.createDepartment = this.createDepartment.bind(this);
        this.deleteDepartment = this.deleteDepartment.bind(this);
    }

    async componentDidMount(){
        const response = await axios.get('http://localhost:8080/api/department');
        const deparments = response.data;

        this.setState({deparments : deparments.reverse()});
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

        const {deparments} = this.state;
        deparments.unshift(newDepartment);

        this.setState({
            deparments,
            name: '',
            code: ''
        });
    }

    async deleteDepartment(id){
        if(!window.confirm("Are you sure you want to delete this department?")){
            return;
        }

        const {deparments} = this.state;

        await axios.delete(`http://localhost:8080/api/department/${id}`);

        for(let i=0;i<deparments.length;i++){
            if(deparments[i].id === id){
                deparments.splice(i, 1);
                break;
            }
        }

        this.setState({deparments});
    }

    render(){
        const {deparments, name, code} = this.state;

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
                    
                    {deparments.map(d =>
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