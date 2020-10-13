import React, {Component} from 'react';
import Login from './Login';
import Signup from './Signup';
import './css/AuthModal.css';

class AuthModal extends Component{
    render(){
        return(
            <div>
                <button data-toggle='modal' data-target='#auth'>
                    Sign In
                </button>

                <div className='auth-modal modal fade' id='auth' data-backdrop='static'>
                    <div className ='modal-dialog modal-dialog-centered'>
                        <div className ='modal-content'>
                            <div className ='modal-header'>
                                <ul className='nav nav-tabs'>
                                    <li>
                                        <a className='nav-link active' data-toggle='tab' href='#login'>
                                            Login
                                        </a>
                                    </li>

                                    <li>
                                        <a className='nav-link' data-toggle='tab' href='#signup'>
                                            Sign Up
                                        </a>
                                    </li>
                                </ul>
                    
                                <button id='close-auth' className='close' data-dismiss='modal'>
                                    <span>&times;</span>
                                </button>
                            </div>

                            <div className ='modal-body'>
                                <div className='tab-content'>
                                    <section id='login' className ='tab-pane active'>
                                        <Login/>
                                    </section>

                                    <section id='signup' className ='tab-pane'>
                                        <Signup/>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthModal;