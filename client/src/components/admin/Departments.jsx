import React, {Component} from 'react';
import './Departments.css';

class Departments extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="departments page"> 

                <form action="" className="add-department">
                    <h2>Create New Department</h2>
                    <label for='name'>Enter Department Name</label>
                    <input id='name' type='text' name='dName'/>
                    <label for='code'>Enter Department Code</label>
                    <input id='code' type='double' name='dID'/>
                    <button>Create Department</button>
                </form>

                <form action = "" className="delete-department">
                    <h2>Delete Department</h2>
                    <label for='deleteID'>Enter Department ID</label>
                    <input id='deleteID'/>
                    <button>Delete Department</button>
                </form>

                <h1>Current Active Departments</h1>
                <table className='department-list' width=''>
                    <tr>
                        <th>Department ID</th>
                        <th>Department Name</th>
                        <th>Department Code</th>
                    </tr>
                    <tr>
                        <td>12312</td> {/*depart id*/}
                        <td>test</td>   {/*depart name*/}
                        <td>ENSF</td>   {/*depart code*/}
                    </tr>
                    <tr><td>  </td>
                        <td></td>
                        <td></td>
                    </tr>

                </table>
                
            </div>
        )
    }
}
export default Departments;
