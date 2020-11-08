import React from 'react';
import {deleteUser} from '../../../src/store/actions/profileActions';
import {deleteUserPosts} from '../../../src/store/actions/postActions';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './css/DeleteUser.css';

function DeleteUser(props){
    const handleClick = async () =>{
        const{uid, alert} = props;

        const confirmDelete = async () => {
            const msgPost = await deleteUserPosts(uid);
            const msg = await deleteUser(uid);

            if(msg && msgPost){
                alert.success("Successfully deleted user");
            } else{
                alert.error("Unable to delete account");
            }
        }

        confirmAlert({
            title: 'Rate My Courses',
            message: 'Are you sure you want to delete this account',
            buttons: [
                {label: 'Yes', onClick: confirmDelete},
                {label: 'No', onClick: () => {return;}}
            ]
        });      
    }

    return(
        <div className="deleteUser">
            <h3>Delete Account</h3>

            <button onClick= {handleClick} className="btn btn-block btn-outline-danger btn-lg">
                DELETE
            </button>
        </div>
    )
    
    
}
export default DeleteUser;
