import React, {Component} from 'react';
import axios from 'axios';
import {withAlert} from 'react-alert';
import './css/Login.css';

class Login extends Component{
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    async handleSubmit(e){
        e.preventDefault();

        const {username, password} = this.state;
        const {alert} = this.props;

        const data = {
            email: '',
            username, 
            password
        }

        const config = {headers: {'content-type': 'application/json'}};
        const response = await axios.post('http://localhost:8080/api/user/login', data, config);
        const msg = response.data;    
    
        if(msg === "Username is not registered" || msg === "Password is incorrect"){
            alert.error(msg);
        } else{
            alert.success(msg);
        }
    }

    render(){
        const {username, password} = this.state;

        return(
            <div className='login'>
                <form onSubmit={this.handleSubmit}>
                    <h1 className='title'>Sign In</h1>
                        
                    <p className='mb-4'>
                        Help students with your honest ratings!
                    </p>
                        
                    <label  htmlFor='username'>Username <span>*</span></label><br/>
                    <input
                        id='username'
                        type='text'
                        value={username}
                        onChange={this.handleChange}
                        required
                    />
                    
                    <label htmlFor='password'>Password <span>*</span></label><br/>
                    <input
                        id='password'
                        type='password'
                        value={password}
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

export default withAlert()(Login);