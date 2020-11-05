import React, {Component} from 'react';
import {changePassword} from '../../../src/store/actions/profileActions';

class PasswordForm extends Component{
    constructor(){
        super();
        this.state = {
            newPassword: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e){
        e.preventDefault(e);
        const{newPassword} = this.state;
        const{uid, alert} = this.props;

        const msg = await changePassword(uid, newPassword);

        if(!msg){
            alert.error("Unable to change password!");
        } else{
            alert.success("Password successfully changed");
        }
    }

    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    render(){
        const {newPassword} = this.state;
        return(
        <form className='change-password' onSubmit={this.handleSubmit}>
                    <h3>Change My Password</h3>

                    <label htmlFor='current-password'>Current Password<span>*</span></label>
                    <input 
                        id='current-password'
                        type='password'
                    />

                    <label htmlFor='newPassword'>New Password<span>*</span></label>
                    <input 
                        id='newPassword'
                        type="password"
                        onChange = {this.handleChange}
                        value = {newPassword}
                    />

                    <label htmlFor="confirm-password">Confirm New Password<span>*</span></label>
                    <input 
                        id='confirm-password'
                        type="password"
                    />

                    <button className='btn btn-block btn-outline-dark btn-lg'>
                        CHANGE
                    </button>
                </form>
        )
    }
}

export default PasswordForm;