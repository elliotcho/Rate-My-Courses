import React, {Component} from 'react';
class LogIn extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <form method="post">
                <label for="username">Enter Username:</label>
                <input type="text" id="username" name="user"/>
                <label for="password">Enter Password: <input type="text" id="password"/> </label>
                <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default LogIn;