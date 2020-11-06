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
            confirmPassword: '',
            adminCode: '',
            showAdmin: false
        };

        this.toggleAdmin = this.toggleAdmin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleAdmin(){
        const {showAdmin} = this.state;
        this.setState({showAdmin: !showAdmin});
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
            password,
            dateCreated: new Date().toString()
        }

        dispatch(signup(data, alert));
    }

    render(){
        const {username, email, password, confirmPassword, adminCode, showAdmin} = this.state;

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

                   {showAdmin? 
                       (<div className='d-inline-block' style={{width: '100%'}}>
                            <label htmlFor='adminCode'>Admin Code</label>
                            <input 
                                id='adminCode'
                                type='text'
                                value={adminCode}
                                onChange={this.handleChange}
                            />
                       </div>) : null
                   }
                        
                    <button className="btn btn-outline-success btn-block">
                        Sign Up
                    </button>

                    <p className='mt-3 text-center admin-link' onClick={this.toggleAdmin}>
                        {showAdmin? 'Sign up as user?' : 'Sign up as admin?'}
                    </p>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(null, mapDispatchToProps)(withAlert()(Signup));