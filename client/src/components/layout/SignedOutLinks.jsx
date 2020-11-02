import React, {Component} from 'react';
import AuthModal from '../auth/AuthModal';
import { Nav} from 'react-bootstrap';
import './css/SignedOutLinks.css';

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
                    <Nav.Item className='signIn' data-toggle='modal' data-target='#auth' id='open-auth'>
                        Sign In
                    </Nav.Item> 
                </Nav>

                <AuthModal/>
            </div>
            
        )
    }
}

export default SignedOutLinks;