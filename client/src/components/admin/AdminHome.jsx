import React, {Component} from 'react';
import  Courses from './Courses'
import Users from './Users';
import Departments from './Departments';
import './AdminHome.css';


class AdminHome extends Component{
    constructor(){
        super();
        this.state={

        };
    }

    render(){
        return(
            <div className="admin-home">
                <h1>Administrator</h1>
                <hr></hr>
                <div className="btn-group-wrap"> 
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-lg btn-secondary">Departments</button>
                        <button type="button" className="btn btn-lg btn-secondary">Courses</button>
                        <button type="button" className="btn btn-lg btn-secondary">Users</button>
                    </div>
                </div>
                <Courses/>
                <Departments/>
                <Users/>
            </div>
        )
    }
}

export default AdminHome;