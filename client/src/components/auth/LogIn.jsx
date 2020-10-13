import React, {Component} from 'react';
import "./LogIn.css"
class LogIn extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="sign-in container-fluid">
                <form action="" className="sign-in-form">
                        <h1 className="title">Sign In</h1>
                        <p className="sign-in-p mb-4">Help students with your honest ratings!</p>
                        <label className="input-label" htmlFor="username">Username <span>*</span></label><br/>
                        <input className="input-ans" type="text"/>
                        <label className="input-label" htmlFor="password">Password <span>*</span></label><br/>
                        <input className="input-ans"type="password"/>
                        <button className="btn btn-outline-success btn-block">Sign In</button>
                        <a href="" className="btn btn-block" role="button">Forgot Password?</a>
                        <hr/>
                        <a href="" className="sign-up-btn btn btn-block btn-outline-info" role="button">Sign Up</a>
                </form>
            </div>
        )
    }
}

export default LogIn;