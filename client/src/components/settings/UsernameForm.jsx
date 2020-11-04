import React, {Component} from 'react';
import {changeUsername} from '../../../src/store/actions/profileActions';

class UsernameForm extends Component{
    constructor(){
        super();

        this.state = {
            newName: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    async handleSubmit(e){
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

    render(){
        const {newName} = this.state;
   
        return(
            <form className="change-username" onSubmit={this.handleSubmit}>
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
        )
    }
}

export default UsernameForm;