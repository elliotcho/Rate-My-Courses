import React, {Component} from 'react';
import {getAllDepartments} from '../../store/actions/departmentActions';
import {getCoursesInDepartment} from '../../store/actions/courseActions';
import './css/SearchCourse.css';

class SearchCourse extends Component{
    constructor(){
        super();

        this.state = {
            departmentId: '',
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
        const {value} = e.target;

        let courses;

        if(value === ''){
            courses = [];
        } else {
            courses = await getCoursesInDepartment(value);
        }

        this.setState({
            departmentId: value,
            courses
        });
    }

    toCourse(courseId){
        this.props.history.push(`/posts/${courseId}`);
    }

    render(){
        const {departmentId, departments, courses} = this.state;

        return(
            <div className='search-course-container'>
                <h1 className='brand'>
                    <span role='img' aria-label='books-icon'>
                        📚
                    </span> 
                    
                    Rate My Courses
                </h1>
                
                <div className='search-course text-white'>
                    <h1 className='select-course'>Select a Department</h1>
                
                    <select onChange={this.handleChange} value={departmentId}>
                        <option value=''></option>

                        {departments.map(department =>
                            <option value={department.id} key={department.id}>
                                {department.code}
                            </option>
                        )}
                    </select>
                    
                    {courses.length > 0? 
                        courses.map(course => 
                            <div className='course' key={course.id} onClick={() => this.toCourse(course.id)}>
                                {course.departmentCode} {course.number}: {course.name}
                            </div>
                        
                        ) : departmentId? 

                        (<p className = 'course'>
                            No courses available for this department :(
                        </p>) : null
                    }
                </div>
            </div>
        )
    }
}

export default SearchCourse;