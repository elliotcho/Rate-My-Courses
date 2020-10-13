import React, {Component} from 'react';
import './Users.css';
class Users extends Component{
    render(){
        return(
            <div className= "users">
                <table className="userTable"> 
                    <tr>
                        <th>UserID</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Admin</th>
                        <th>Delete User</th>
                    </tr>
                    <tr>
                        <th>12345</th>
                        <th>gchalla@com.com</th>
                        <th>gchalla</th>
                        <th>True</th>
                        <th><button className="btn"><i className="fa fa-close"></i></button></th>
                    </tr>
                    <tr>
                        <th>12345</th>
                        <th>gchalla@com.com</th>
                        <th>gchalla</th>
                        <th>True</th>
                        <th><button className="btn"><i className="fa fa-close"></i></button></th>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Users;