import React, {Component} from 'react';
import {changePassword} from '../../../src/store/actions/profileActions';

class PasswordForm extends Component{
    constructor(){
        super();
        this.state = {
            currPassword: '',
            newPassword: '',
            confirmPassword: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e){
        e.preventDefault(e);

        const{currPassword, newPassword, confirmPassword} = this.state;
        const{uid, alert} = this.props;

        if(newPassword !== confirmPassword){
            alert.error("New password does not match confirm password");
            return;
        }

        const isSuccessful = await changePassword(uid, currPassword, newPassword);

        if(!isSuccessful){
            alert.error("Current password must be correct");
        } else{
            alert.success("Password successfully changed");

            this.setState({
                currPassword: '',
                newPassword: '',
                confirmPassword: ''
            })
        }
    }

    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    render(){
        const {currPassword, newPassword, confirmPassword} = this.state;
        
        return(
            <form className='change-password' onSubmit={this.handleSubmit}>
                    <h3>Change My Password</h3>

                    <label htmlFor='current-password'>Current Password<span>*</span></label>
                    <input 
                        id='currPassword'
                        type='password'
                        minLength='6'
                        maxLength='49'
                        onChange={this.handleChange}
                        value={currPassword}
                        required
                    />

                    <label htmlFor='newPassword'>New Password<span>*</span></label>
                    <input 
                        id='newPassword'
                        type="password"
                        minLength='6'
                        maxLength='49'
                        onChange = {this.handleChange}
                        value = {newPassword}
                        required
                    />

                    <label htmlFor="confirm-password">Confirm New Password<span>*</span></label>
                    <input 
                        id='confirmPassword'
                        type="password"
                        minLength='6'
                        maxLength='49'
                        onChange={this.handleChange}
                        value={confirmPassword}
                        required
                    />

                    <button className='btn btn-block btn-outline-dark btn-lg'>
                        CHANGE
                    </button>
                </form>
        )
    }
}

export default PasswordForm;