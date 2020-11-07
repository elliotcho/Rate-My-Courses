import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import  CourseTable from './CourseTable'
import UserTable from './UserTable';
import DepartmentTable from './DepartmentTable';
import './css/AdminHome.css';

function AdminHome(props){
    const handleClick = (e) => {
        props.history.push(`/admin/${e.target.name}`);
    }

    if(!props.uid){
        return <Redirect to ='/'/>
    }

    if(!props.status){
        return <Redirect to ='/'/>
    }

    const {type} = props.match.params;

    const defaultStyle = 'btn btn-lg btn-secondary'; 
    const activeStyle = `${defaultStyle} selected-btn`;

    const departmentBtnStyle = (type === 'department') ? activeStyle: defaultStyle;
    const courseBtnStyle = (type === 'course') ? activeStyle: defaultStyle;
    const userBtnStyle = (type === 'user') ? activeStyle: defaultStyle;

    return(
        <div className= 'admin'>
            <h1>Administrator</h1>

            <hr/>

            <div className='btn-group-wrap'> 
                <div className='btn-group'>
                    <button className={`${departmentBtnStyle} compartments`} name='department' onClick={handleClick}>
                        Departments
                    </button>

                    <button className={`${courseBtnStyle} compartments`} name='course' onClick={handleClick}>
                        Courses
                    </button>
                   
                    <button className={`${userBtnStyle} compartments`} name='user' onClick={handleClick}>
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

const mapStateToProps = (state) => {
    return{
        uid: state.auth.uid,
        status: state.auth.status
    }
}

export default connect(mapStateToProps)(AdminHome);