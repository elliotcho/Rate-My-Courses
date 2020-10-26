import React, {Component} from 'react';
import  CourseTable from './CourseTable'
import UserTable from './UserTable';
import DepartmentTable from './DepartmentTable';
import './css/AdminHome.css';

class AdminHome extends Component{
    constructor(){
        super();  
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.history.push(`/admin/${e.target.name}`);
    }

    render(){
        const {type} = this.props.match.params;
   
        const defaultStyle = 'btn btn-lg btn-secondary'; 
        const activeStyle = `${defaultStyle} active`;

        const departmentBtnStyle = (type === 'department') ? activeStyle: defaultStyle;
        const courseBtnStyle = (type === 'course') ? activeStyle: defaultStyle;
        const userBtnStyle = (type === 'user') ? activeStyle: defaultStyle;

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

                {type === 'department' ? 
                    (<DepartmentTable/>) : (type === 'course') ?
                    (<CourseTable/>) : (type === 'user') ? 
                    (<UserTable/>): null
                }
            </div>
        )
    }
}

export default AdminHome;