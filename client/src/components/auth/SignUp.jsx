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

        const {email, username, password, confirmPassword, adminCode} = this.state;
        const {dispatch, alert} = this.props;

        if(password !== confirmPassword){
            alert.error("Passwords do not match");
            return;
        }

        const data = {
            email,
            username, 
            password,
            dateCreated: new Date().toString(),
            adminCode
        }

        dispatch(signup(data, alert));
    }

    render(){
        const {username, email, password, confirmPassword, adminCode, showAdmin} = this.state;

        const formPadding = (showAdmin) ? {padding: '25px'} : {padding: '35px'};

        return(
            <div className='sign-up'>
                <form onSubmit={this.handleSubmit} style={formPadding}>
                    <h2 className='mb-4'>Sign Up</h2>

                    <label htmlFor='username'>Username <span>*</span></label>
                    <input 
                        id='username' 
                        type='text'
                        value={username}
                        minLength='2'
                        maxLength='10'
                        onChange={this.handleChange}
                        required
                    />
                        
                    <label htmlFor='email'>Email address <span>*</span></label>
                    <input 
                        id='email' 
                        type='email'
                        minLength='6'
                        maxLength='49'
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                        
                    <label htmlFor='password'>Password <span>*</span></label>
                    <input 
                        id='password'
                        type='password'
                        minLength='6'
                        maxLength='49'
                        value={password}
                        onChange={this.handleChange}
                        required
                    />

                    <label htmlFor='confirmPassword'>Confirm Password <span>*</span></label>
                    <input 
                        id='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        minLength='6'
                        maxLength='49'
                        onChange={this.handleChange}
                        required
                    />

                   {showAdmin? 
                       (<div className='d-inline-block' style={{width: '100%'}}>
                            <label htmlFor='adminCode'>Admin Code <span>*</span></label>
                            <input 
                                id='adminCode'
                                type='password'
                                value={adminCode}
                                onChange={this.handleChange}
                                required
                            />
                       </div>) : null
                   }
                        
                    <button className="btn btn-outline-success btn-block">
                        Sign Up
                    </button>

                    <p className='mt-3 text-center' onClick={this.toggleAdmin}>
                        {showAdmin? 'Sign up as user?' : 'Sign up as admin?'}
                    </p>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(null, mapDispatchToProps)(withAlert()(Signup));