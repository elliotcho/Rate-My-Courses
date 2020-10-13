import React, {Component} from 'react';
import "./css/Login.css"
class Login extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="login">
                <form className="sign-in-form">
                        <h1 className="title">Sign In</h1>
                        <p className="mb-4">Help students with your honest ratings!</p>
                        <label className="input-label" htmlFor="username">Username <span>*</span></label><br/>
                        <input className="input-ans" type="text"/>
                        <label className="input-label" htmlFor="password">Password <span>*</span></label><br/>
                        <input className="input-ans"type="password"/>
                        <button className="btn btn-outline-success btn-block">Sign In</button>
                </form>
            </div>
        )
    }
}

export default Login;