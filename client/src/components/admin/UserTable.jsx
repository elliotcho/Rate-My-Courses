import React, {Component} from 'react';
import {getAllUsers} from '../../store/actions/adminActions';
import './css/UserTable.css';

class UserTable extends Component{
    constructor(){
        super();

        this.state = {
            users: []
        }
    }

    async componentDidMount(){
        const users = await getAllUsers();
        this.setState({users});
    }

    render(){
        const {users} = this.state;

        return(
            <div className = 'user-table'>
                <table>
                    <thead>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>User email</th>
                        <th>Status</th>
                    </thead>

                    {users.map(user =>
                        <tr key = {user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                {user.admin? 'Admin' : 'User'}
                            </td>
                        </tr>
                    )}
                </table>
            </div>
        )
    }
}
export default UserTable;