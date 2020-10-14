import React, {Component} from 'react';
import  CourseTable from './CourseTable'
import UserTable from './UserTable';
import DepartmentTable from './DepartmentTable';
import './css/AdminHome.css';


class AdminHome extends Component{
    constructor(){
        super();
        
        this.state={
            activeTable: ''
        };
    
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        console.log(e.target.name)
        this.setState({activeTable: e.target.name});
    }

    render(){
        const {activeTable} = this.state;

        const defaultStyle = 'btn btn-lg btn-secondary'; 
        const activeStyle = `${defaultStyle} active`;

        const departmentBtnStyle = (activeTable === 'department') ? activeStyle: defaultStyle;
        const courseBtnStyle = (activeTable === 'course') ? activeStyle: defaultStyle;
        const userBtnStyle = (activeTable === 'user') ? activeStyle: defaultStyle;

        return(
            <div className= 'admin'>
                <h1>Administrator</h1>

                <hr/>

                <div className='btn-group-wrap'> 
                    <div className='btn-group' role="group" aria-label="Basic example">
                        <button className={departmentBtnStyle} name='department' onClick={this.handleClick}>
                            Departments
                        </button>

                        <button className={courseBtnStyle} name='course' onClick={this.handleClick}>
                            Courses
                        </button>
                       
                        <button className={userBtnStyle} name='user' onClick={this.handleClick}>
                            Users
                        </button>
                    </div>
                </div>
                <br></br>

                {activeTable === 'department' ? 
                    (<DepartmentTable/>) : (activeTable === 'course') ?
                    (<CourseTable/>) : 
                    (<UserTable/>)
                }
            </div>
        )
    }
}

export default AdminHome;