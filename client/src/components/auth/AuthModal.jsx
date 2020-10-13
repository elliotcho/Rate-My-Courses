import React, {Component} from 'react';
import Login from './Login';
import SignUp from './Signup';

class AuthModal extends Component{
    render(){
        return(
            <div>
                <button data-toggle='modal' data-target='#auth-modal'>
                    Sign In
                </button>

                <div className='modal fade' id='auth-modal' data-backdrop='static'>
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
                                        <a className='nav-link active' data-toggle='tab' href='#signup'>
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
                                    <section id='login' className ='tab-pane'>
                                        <h1>HELLO</h1>
                                        <Login/>
                                    </section>

                                    <section id='signup' className ='tab-pane'>
                                        <SignUp/>
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