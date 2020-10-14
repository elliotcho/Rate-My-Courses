import React, {Component} from 'react';
import  CourseTable from './CourseTable'
import UserTable from './UserTable';
import DepartmentTable from './DepartmentTable';
import './css/AdminHome.css';


class AdminHome extends Component{
    constructor(){
        super();
        
        this.state={

        };
    }

    render(){
        return(
            <div className= "admin">
                <h1>Administrator</h1>
                <hr></hr>
                <div className="btn-group-wrap"> 
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-lg btn-secondary">Departments</button>
                        <button type="button" className="btn btn-lg btn-secondary">Courses</button>
                        <button type="button" className="btn btn-lg btn-secondary">Users</button>
                    </div>
                </div>
                <br></br>

                <CourseTable/>
            </div>
        )
    }
}

export default AdminHome;