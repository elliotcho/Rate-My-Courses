import React, {Component} from 'react';
import {getAllUsers, handleBan} from '../../store/actions/adminActions';
import './css/UserTable.css';

class UserTable extends Component{
    constructor(){
        super();

        this.state = {
            users: []
        }

        this.handleBan = this.handleBan.bind(this);
    }

    async componentDidMount(){
        const users = await getAllUsers();
        this.setState({users});
    }

    async handleBan(id, action){
        const data = {id, action};

        const users = await handleBan(data, this.state.users);

        this.setState({users});
    }

    render(){
        const {users} = this.state;

        const banUser = (id) => this.handleBan(id, 'Ban');
        const unbanUser = (id) => this.handleBan(id, 'unBan')

        return(
            <div className = 'user-table'>
                <table>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Username</th>
                            <th>User email</th>
                            <th>Status</th>
                            <th>Ban Account</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map(user =>
                            <tr key = {user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                
                                <td>
                                    {user.admin? 'Admin' : 'User'}
                                </td>

                                <td>
                                    {!user.admin && user.banned?    
                                        (<button className='btn btn-success' onClick={() => unbanUser(user.id)}>
                                            Undo
                                        </button>) : !user.admin?
                                        (<button className='btn btn-danger' onClick={() => banUser(user.id)}>
                                            Ban
                                        </button>) : null
                                    }
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default UserTable;