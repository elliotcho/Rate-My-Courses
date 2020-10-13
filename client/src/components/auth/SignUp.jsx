import React, {Component} from 'react';
import './css/Signup.css';

class Signup extends Component{
    constructor(){
        super();

        this.state={

        };
    }

    render(){
        return(
            <div className="sign-up">
                <form>
                    <h1 className='title'>Sign Up</h1>

                    <p className='mb-4'>
                        Enter your information to create an account
                    </p>

                    <label htmlFor="username">Username <span>*</span></label>
                    <input className="text-muted" type="text"></input>    
                        
                    <label htmlFor="email">Email address <span>*</span></label>
                    <input className="text-muted" type="email"></input>
                        
                    <label htmlFor="password">Password <span>*</span></label>
                    <input className="text-muted" type="password"></input>

                    <label htmlFor="confirmPassword">Confirm Password <span>*</span></label>
                    <input className="text-muted" type="confirmPassword"></input>
                        
                    <button className="btn btn-outline-success btn-block">
                        Sign Up
                    </button>
                </form>
            </div>
        )
    }
}

export default Signup;