import React, {Component} from 'react';
import {changeUsername} from '../../../src/store/actions/profileActions';
import './css/UsernameForm.css';

class UsernameForm extends Component{
    constructor(){
        super();

        this.state = {
            currUsername: '',
            newName: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    async handleSubmit(e){
        e.preventDefault();

        const{newName, currUsername} = this.state;
        const {uid, alert} = this.props;

        const msg = await changeUsername(uid, newName, currUsername);

        if(msg === 'Failed'){
            alert.error("Username already exists");
        } 
        
        else if(msg === 'Mismatch'){
            alert.error("Current username is incorrect!");
        } 
        
        else{
            alert.success("Username changed successfully");

            this.setState({
                currUsername: '',
                newName: ''
            });
        }
    }

    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    render(){
        const {newName, currUsername} = this.state;
   
        return(
            <form className="change-username" onSubmit={this.handleSubmit}>
                <h3>Change My Username</h3>

                <label htmlFor="currUsername">Current Username<span>*</span></label>
                <input 
                    id='currUsername'
                    type='text'
                    minLength='4'
                    maxLength='30'
                    onChange={this.handleChange}
                    value={currUsername}
                    required
                />

                <label htmlFor="newName">New Username<span>*</span></label>
                <input 
                    id='newName'
                    type="text"
                    minLength='4'
                    maxLength='30'
                    onChange={this.handleChange}
                    value={newName}
                    required
                />
                  
                <button className='btn btn-block btn-outline-secondary btn-lg'>
                    CHANGE
                </button>
            </form>
        )
    }
}

export default UsernameForm;