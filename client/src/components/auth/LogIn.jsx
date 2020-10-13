import React, {Component} from 'react';
import './css/Login.css'

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

    handleSubmit(e){
        e.preventDefault();
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

export default Login;