import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Navbar, Form} from 'react-bootstrap';
import logo from "../../images/logo.png";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import './css/Navigate.css';

class Navigate extends Component{    
    render(){
        const {uid} = this.props;

        return(
            <div>
                <Navbar expand="lg" className="nav-bar">
                    <Navbar.Brand href="/">
                        <img
                            src= {logo}
                            width="34"
                            height="34"
                            className="d-inline-block align-top"
                            alt="Website logo"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    
                    <Form className="form-center"/>

                    <Navbar.Collapse id="basic-navbar-nav">

                        <div className="ml-auto">
                            {uid? <SignedInLinks/> : <SignedOutLinks/>}
                        </div>
                        
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({uid: state.auth.uid});

export default connect(mapStateToProps)(Navigate);