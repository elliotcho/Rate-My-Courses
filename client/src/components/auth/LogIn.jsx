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
                        <p className="sign-in-p">Help students with your honest rating!</p>
                        <label className="input-label" htmlFor="username">Username:</label><br/>
                        <input className="input-ans" type="text"/>
                        <label className="input-label" htmlFor="password">Password:</label><br/>
                        <input className="input-ans"type="password"/>
                        <button className="btn btn-outline-light">Sign In</button>
                </form>
            </div>
        )
    }
}

export default LogIn;