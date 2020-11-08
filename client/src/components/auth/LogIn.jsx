import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../../store/actions/authActions';
import {withAlert} from 'react-alert';
import './css/Login.css';

class Login extends Component{
    constructor(){
        super();

        this.state = {
            usrname: '',
            pwd: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();

        const {usrname, pwd} = this.state;
        const {dispatch, alert} = this.props;

        const data = {
            email: '',
            username: usrname, 
            password: pwd
        }

        dispatch(login(data, alert));
    }

    render(){
        const {usrname, pwd} = this.state;

        return(
            <div className='login'>
                <form onSubmit={this.handleSubmit}>
                    <h2>Sign In</h2>
                        
                    <p className='mb-4'>
                        Help students with your honest ratings!
                    </p>
                        
                    <label  htmlFor='username'>Username <span>*</span></label><br/>
                    <input
                        id='usrname'
                        type='text'
                        value={usrname}
                        onChange={this.handleChange}
                        required
                    />
                    
                    <label htmlFor='password'>Password <span>*</span></label><br/>
                    <input
                        id='pwd'
                        type='password'
                        value={pwd}
                        onChange={this.handleChange}
                        required
                    />
                        
                    <button className='btn btn-outline-success btn-block'>
                        Sign In
                    </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(null, mapDispatchToProps)(withAlert()(Login));