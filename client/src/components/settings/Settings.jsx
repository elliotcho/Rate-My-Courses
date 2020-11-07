import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import UsernameForm from './UsernameForm';
import PasswordForm from './PasswordForm';
import DeleteUser from './DeleteUser';
import {withAlert} from 'react-alert';
import './css/Settings.css';
import ChangeColor from './ChangeColor';

class Settings extends Component {
    render() {
        const {uid, alert} = this.props;

        if(!uid){
            return <Redirect to='/'/>
        }

        return (
            <div className='settings'>
                <h1>Settings</h1>
                <PasswordForm uid = {uid} alert={alert}/>
                <UsernameForm uid={uid} alert={alert}/>
                <ChangeColor uid={uid} alert={alert}/>
                <DeleteUser uid={uid} alert={alert}/>
            </div>
        )
    } 
}

const mapStateToProps = (state) => ({uid: state.auth.uid});

export default connect(mapStateToProps)(withAlert()(Settings));