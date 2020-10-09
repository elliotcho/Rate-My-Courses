import React, {Component} from 'react';
import './SignUp.css';

class SignUp extends Component{
    constructor(){
        super();

        this.state={

        };
    }

    render(){
        return(
            <div className="sign-up">
                <form>
                    <h1 className='text-center'>Sign Up</h1>

                    <p className='text-muted mb-4'>
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
                        
                    <button className="btn btn-success mt-4">
                        Sign Up
                    </button>
                </form>
            </div>
        )
    }
}

export default SignUp;