import React, {Component} from 'react';
import {getAllDepartments} from '../../store/actions/departmentActions';
import {getCoursesInDepartment} from '../../store/actions/courseActions';
import './css/SearchCourse.css';

class SearchCourse extends Component{
    constructor(){
        super();

        this.state = {
            departments: [],
        }

        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount(){
        const departments = await getAllDepartments();
        this.setState({departments});
    }

    async handleChange(e){
        const courses = await getCoursesInDepartment(e.target.value);
        console.log(courses);
    }

    render(){
        const {departments} = this.state;

        return(
            <div className="search-course">
                
                    <select onChange={this.handleChange}>
                        <option value=''></option>

                        {departments.map(department =>
                            <option value={department.id} key={department.id}>
                                {department.code}
                            </option>
                        )}
                    </select>
                
            </div>
        )
    }
}

export default SearchCourse;