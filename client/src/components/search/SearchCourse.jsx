import React, {Component} from 'react';
import {getAllDepartments} from '../../store/actions/departmentActions';
import {getCoursesInDepartment} from '../../store/actions/courseActions';
import './css/SearchCourse.css';
import logo from '../../images/logo.png';

class SearchCourse extends Component{
    constructor(){
        super();

        this.state = {
            departments: [],
            courses: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.toCourse = this.toCourse.bind(this);
    }

    async componentDidMount(){
        const departments = await getAllDepartments();
        this.setState({departments});
    }

    async handleChange(e){
        const courses = await getCoursesInDepartment(e.target.value);
        this.setState({courses});
    }

    toCourse(courseId){
        this.props.history.push(`/posts/${courseId}`);
    }

    render(){
        const {departments, courses} = this.state;

        return(
            <div className='search-course-container'>
                <h1 className='brand'>📚 Rate My Courses</h1>
                <div className='search-course text-white'>
                    <h1 className='select-course'>Select a Department</h1>
                
                    <select onChange={this.handleChange}>
                        <option value=''></option>

                        {departments.map(department =>
                            <option value={department.id} key={department.id}>
                                {department.code}
                            </option>
                        )}
                    </select>
                    
                    {courses.map(course => 
                        <div className='courses'key={course.id} onClick={() => this.toCourse(course.id)}>
                            {course.departmentCode} {course.number}: {course.name}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default SearchCourse;