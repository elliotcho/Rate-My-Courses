import React, {Component} from 'react';
import './css/Settings.css';

class Settings extends Component {
    render() {
        return (
            <div className='settings'>
                <h1>Settings</h1>
                <form className='change-password'>
                    <h3>Change My Password</h3>

                    <label htmlFor='current-password'>Current Password<span>*</span></label>
                    <input 
                    id='current-password'
                    type='password'
                    />

                    <label htmlFor='new-password'>New Password<span>*</span></label>
                    <input 
                    id='new-password'
                    type="text"/>

                    <label htmlFor="confirm-password">Confirm New Password<span>*</span></label>
                    <input 
                    id='confirm-password'
                    type="text"
                    />
                </form>
                <form className="change-username">
                    <h3>Change My Username</h3>

                    <label htmlFor="current-name">Current Username<span>*</span></label>
                    <input 
                    id='current-name'
                    type='text'
                    />

                    <label htmlFor="new-name">New Username<span>*</span></label>
                    <input 
                    id='new-name'
                    type="text"
                    />

                </form>
            </div>
        )
    }
    
}

export default Settings;