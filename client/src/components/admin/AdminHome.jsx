import React, {Component} from 'react';
import './AdminHome.css';

class AdminHome extends Component{
    constructor(){
        super();
        this.state={

        };
    }

    render(){
        return(
            <div>
                <h1>Administrator</h1>
                <hr></hr>
                <div className="btn-group-wrap"> 
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-secondary">Departments</button>
                        <button type="button" class="btn btn-secondary">Courses</button>
                        <button type="button" class="btn btn-secondary">Users</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminHome;