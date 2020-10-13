import React, {Component} from 'react';
import axios from 'axios';
import './Departments.css';

class Departments extends Component{
    constructor(){
        super();

        this.state = {
            deparments: []
        }

        this.createDepartment = this.createDepartment.bind(this);
    }

    async componentDidMount(){
        const response = await axios.get('http://localhost:8080/api/department');
        const deparments = response.data;

        console.log(deparments);

        this.setState({deparments});
    }

    createDepartment(){

    }

    render(){
        const {deparments} = this.state;

        return(
            <div className="departments page"> 

                <form onSubmit={this.createDepartment} className="add-department">
                    <h2>Create New Department</h2>
                    <label for='name'>Enter Department Name</label>
                    <input id='name' type='text' name='dName'/>
                    <label for='code'>Enter Department Code</label>
                    <input id='code' type='double' name='dID'/>
                    <button>Create Department</button>
                </form>

                <form action = "" className="delete-department">
                    <h2>Delete Department</h2>
                    <label for='deleteID'>Enter Department ID</label>
                    <input id='deleteID'/>
                    <button>Delete Department</button>
                </form>

                <h1>Current Active Departments</h1>
                <table className='department-list' width=''>
                    <tr>
                        <th>Department ID</th>
                        <th>Department Name</th>
                        <th>Department Code</th>
                    </tr>
                    
                    {deparments.map(department =>
                        <tr>
                            <th>{department.id}</th>
                            <th>{department.name}</th>
                            <th>{department.code}</th>
                        </tr>
                    )}
                </table> 
            </div>
        )
    }
}
export default Departments;