import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './css/Settings.css';
import {changeUsername} from '../../../src/store/actions/postActions';

class Settings extends Component {
    constructor(){
        super();
        this.state={
            newName: ""
        };

        this.changeName = this.changeName.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async changeName(){
        const{newName} = this.state;
        const {uid} = this.props;
        const response = await changeUsername(uid, newName);
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

                <form className="change-username">
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
                  
                    <button className='btn btn-block btn-outline-secondary btn-lg' onClick={this.changeName}>
                        CHANGE</button>
                </form>
            </div>
        )
    } 
}

const mapStateToProps = (state) => ({uid: state.auth.uid});

export default connect(mapStateToProps)(Settings);