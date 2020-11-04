import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeUsername} from '../../../src/store/actions/profileActions';
import {withAlert} from 'react-alert';
import './css/Settings.css';

class Settings extends Component {
    constructor(){
        super();
        this.state={
            newName: ""
        };

        this.changeName = this.changeName.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async changeName(e){
        e.preventDefault();

        const{newName} = this.state;
        const {uid, alert} = this.props;

        const msg = await changeUsername(uid, newName);

        if(msg === 'Failed'){
            alert.error("Username already exists");
        } else{
            alert.success("Username changed successfully");
        }
    }

    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    render() {
        const {uid, newName} = this.props;
        

        if(!uid){
            return <Redirect to='/'/>
        }

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
                        type="password"
                    />

                    <label htmlFor="confirm-password">Confirm New Password<span>*</span></label>
                    <input 
                        id='confirm-password'
                        type="password"
                    />

                    <button className='btn btn-block btn-outline-dark btn-lg'>CHANGE</button>

                </form>

                <form className="change-username" onSubmit={this.changeName}>
                    <h3>Change My Username</h3>

                    <label htmlFor="currentName">Current Username<span>*</span></label>
                    <input 
                        id='currentName'
                        type='text'
                    />

                    <label htmlFor="newName">New Username<span>*</span></label>
                    <input 
                        id='newName'
                        type="text"
                        onChange={this.handleChange}
                        value={newName}
                    />
                  
                    <button className='btn btn-block btn-outline-secondary btn-lg'>
                        CHANGE
                    </button>
                </form>
            </div>
        )
    } 
}

const mapStateToProps = (state) => ({uid: state.auth.uid});

export default connect(mapStateToProps)(withAlert()(Settings));