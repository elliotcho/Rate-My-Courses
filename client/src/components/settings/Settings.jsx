import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {changePassword} from '../../../src/store/actions/profileActions';
import UsernameForm from './UsernameForm';
import {withAlert} from 'react-alert';
import './css/Settings.css';

class Settings extends Component {
    constructor(){
        super();

        this.state={
            newPassword: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }
    
    async changePassword(e){
        e.preventDefault();
        const{newPassword} = this.state;
        const{uid, alert} = this.props;
        const isSuccessful = await changePassword(uid, newPassword);

        if(!isSuccessful){
            alert.error("Error changing password");
        } else{
            alert.success("Password successfully changed");
        }
    }

    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    render() {
        const {uid, alert, newPassword} = this.props;
        

        if(!uid){
            return <Redirect to='/'/>
        }

        return (
            <div className='settings'>
                <h1>Settings</h1>
                <form className='change-password' onSubmit={this.changePassword}>
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

                <UsernameForm uid={uid} alert={alert}/>
            </div>
        )
    } 
}

const mapStateToProps = (state) => ({uid: state.auth.uid});

export default connect(mapStateToProps)(withAlert()(Settings));