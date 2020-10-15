import React from 'react';
import { Component } from 'react';
import { Nav} from 'react-bootstrap';
import './css/SignedOutLinks.css'
class SignedOutLinks extends Component{
    
    constructor(){
        super();
        this.state={
          
        };
    }

    render(){
        return(
            <div className= "ml-auto">
                <Nav>
                    <Nav.Item><Nav.Link href="/" className="signIn">Sign In</Nav.Link></Nav.Item> 
                   
                </Nav>
            </div>
            
        )
    }
}

export default SignedOutLinks;