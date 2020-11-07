import React, {Component} from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './css/EditModal.css';
import {editPost} from '../../../src/store/actions/postActions';

class EditModal extends Component{
    constructor(){
        super();

        this.state = {
            newReason: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.props.reason = this.props.reason.bind(this);
    }

    componentDidMount(){
        this.setState({newReason: this.props.reason});
    }

    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    closeModal(){
        const confirmDelete = () => {
            const {reason} = this.props;
            this.setState({newReason: reason});

            document.getElementById('close-edit').click();
        }

        confirmAlert({
            title: 'Rate My Courses',
            message: 'Are you sure you want to exit? Any changes you have made will not be saved?',
            buttons: [
                {label: 'Yes', onClick: confirmDelete},
                {label: 'No', onClick: () => {return;}}
            ]
        }); 
    }

    async handleClick(e){
        e.preventDefault(e);

        const{newReason} = this.state;
        const{postid} = this.props.reason.postId;
        const confirmSave = async () => {
            const success = await editPost(postId, newReason);
            if(success){
                alert.success("Successfully updated post!");
            } else{
                alert.error("Error updating post!");
            }

        }
        confirmAlert({
            title: 'Rate My Courses',
            message: 'Are you sure you want to save your changes? Previous post will be overwritten!',
            buttons: [
                {label: 'Yes', onClick: confirmSave},
                {label: 'No', onClick: () => {return;}}
            ]
        });
    }

    render(){
        const {newReason} = this.state;

        return(
            <div className='edit-modal modal fade' id='edit' data-backdrop='false'>
                <div className ='modal-dialog modal-dialog-centered'>
                    <div className ='modal-content'>
                        <div className ='modal-header'>
                            <h5>Edit your review</h5>
                       
                            <button className='close' onClick={this.closeModal}>
                                <span>&times;</span>
                            </button>

                            <button id='close-edit' data-dismiss='modal' style={{display: 'none'}}/>
                        </div>

                        <div className ='modal-body'>
                            <div className="form-group">
                                <textarea
                                    id= 'newReason'
                                    rows = '8'
                                    value = {newReason}
                                    onChange = {this.handleChange}
                                />
                             </div>
                        </div>

                        <div className='modal-footer'>
                            <button className='' onClick={this.closeModal}>
                                Close
                            </button>

                            <button onClick={this.handleClick}>
                                Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}

export default EditModal;