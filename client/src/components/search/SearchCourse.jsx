import React, {Component} from 'react';
import {getAllDepartments} from '../../store/actions/departmentActions';
import './css/SearchCourse.css';

class SearchCourse extends Component{
    constructor(){
        super();

        this.state = {
            departments: []
        }
    }

    async componentDidMount(){
        const departments = await getAllDepartments();
        this.setState({departments});
    }

    render(){
        const {departments} = this.state;

        return(
            <div className="courses container-fluid">
                <select>
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