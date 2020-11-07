import React from 'react';
import Login from './Login';
import Signup from './Signup';
import './css/AuthModal.css';

function AuthModal(){
    return(
        <div className='auth-modal modal fade' id='auth' data-backdrop='false'>
            <div className ='modal-dialog modal-dialog-centered'>
                <div className ='modal-content'>
                    <div className ='modal-header'>
                        <div className='nav nav-tabs'>                                 
                            <a className='active' data-toggle='tab' href='#login'>
                                Sign In
                            </a>
                                    
                            <a data-toggle='tab' href='#signup'>
                                Sign Up
                            </a>
                        </div>
                    
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
    )
}

export default AuthModal;