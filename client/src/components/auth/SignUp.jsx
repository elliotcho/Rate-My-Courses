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
            <div className="container-fluid">
                <form action="" className="sign-up-form">
                    <div className="intro">
                        <h1>Sign Up</h1>
                        <p>Enter your information to create an account</p>
                    </div>
                    <div className = "sign-up-info">
                        <div className="input-field">
                            <label className="input-label" for="username">Username:</label><br/>
                            <input className="input-ans" type="text"></input>
                        </div>
                        <div className="input-field">
                            <label className="input-label" for="email">Email address:</label><br/>
                            <input className="input-ans" type="email"></input>
                        </div>
                        <div className="input-field">
                            <label className="input-label" for="password">Password:</label><br/>
                            <input className="input-ans" type="password"></input>
                        </div>
                        <button className="btn btn-outline-dark">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;