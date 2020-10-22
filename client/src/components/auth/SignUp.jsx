import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signup} from '../../store/actions/authActions';
import {withAlert} from 'react-alert';
import './css/Signup.css';

class Signup extends Component{
    constructor(){
        super();

        this.state={
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.id] : e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();

        const {email, username, password, confirmPassword} = this.state;
        const {dispatch, alert} = this.props;

        if(password !== confirmPassword){
            alert.error("Passwords do not match");
            return;
        }

        const data = {
            email,
            username, 
            password
        }

        dispatch(signup(data, alert));
    }

    render(){
        const {username, email, password, confirmPassword} = this.state;

        return(
            <div className='sign-up'>
                <form onSubmit={this.handleSubmit}>
                    <h1 className='title'>Sign Up</h1>

                    <p className='mb-4'>
                        Enter your information to create an account
                    </p>

                    <label htmlFor='username'>Username <span>*</span></label>
                    <input 
                        id='username' 
                        type='text'
                        value={username}
                        onChange={this.handleChange}
                        required
                    />
                        
                    <label htmlFor='email'>Email address <span>*</span></label>
                    <input 
                        id='email' 
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                        
                    <label htmlFor='password'>Password <span>*</span></label>
                    <input 
                        id='password'
                        type='password'
                        value={password}
                        onChange={this.handleChange}
                        required
                    />

                    <label htmlFor='confirmPassword'>Confirm Password <span>*</span></label>
                    <input 
                        id='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                        
                    <button className="btn btn-outline-success btn-block">
                        Sign Up
                    </button>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(null, mapDispatchToProps)(withAlert()(Signup));