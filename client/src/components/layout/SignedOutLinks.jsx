import React, {Component} from 'react';
import AuthModal from '../auth/AuthModal';
import { Nav} from 'react-bootstrap';
import './css/SignedOutLinks.css';

class SignedOutLinks extends Component{
    render(){
        return(
            <div className= "ml-auto">
                <Nav className='signed-out-links'>
                    <Nav.Item className='nav-item' data-toggle='modal' data-target='#auth' id='open-auth'>
                        <i class="fas fa-address-card" title='Sign In'></i>
                        <span>Login</span>
                    </Nav.Item> 
                </Nav>

                <AuthModal/>
            </div>
            
        )
    }
}

export default SignedOutLinks;