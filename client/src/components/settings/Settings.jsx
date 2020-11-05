import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {changePassword} from '../../../src/store/actions/profileActions';
import UsernameForm from './UsernameForm';
import {withAlert} from 'react-alert';
import './css/Settings.css';
import PasswordForm from './PasswordForm';

class Settings extends Component {
    constructor(){
        super();

        this.state={
            newPassword: ""
        };

        this.handleChange = this.handleChange.bind(this);
        
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
                <PasswordForm uid = {uid} alert={alert}/>

                <UsernameForm uid={uid} alert={alert}/>
            </div>
        )
    } 
}

const mapStateToProps = (state) => ({uid: state.auth.uid});

export default connect(mapStateToProps)(withAlert()(Settings));