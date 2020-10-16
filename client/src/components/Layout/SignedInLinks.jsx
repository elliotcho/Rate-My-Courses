import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import './css/SignedInLinks.css'
class SignedInLinks extends Component{
    
    constructor(){
        super();
        this.state={
          
        };
    }

    render(){
        return(
            <div className= "ml-auto">
                <Nav>
                    <Nav.Item><Nav.Link href="/"><i className="fa fa-user" aria-hidden="true" title="Profile"></i></Nav.Link></Nav.Item> 
                    <Nav.Item><Nav.Link href="/about"><i className="fa fa-cog" aria-hidden="true" title="Settings"></i></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about"><i className="fa fa-sign-out" aria-hidden="true" title="Sign Out"></i></Nav.Link></Nav.Item>
                </Nav>
            </div>
            
        )
    }
}

export default SignedInLinks;