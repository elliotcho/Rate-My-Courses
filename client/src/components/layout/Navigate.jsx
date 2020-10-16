import React from 'react';
import { Component } from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import logo from "../../images/logo.png";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import './css/Navigate.css';

class Navigate extends Component{
    constructor(){
        super();
        this.state={
            isLoggedIn:false
        };
    }
    
    render(){
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
                    <Form className="form-center">
                        <FormControl type="text" placeholder="Search" className="" />
                    </Form>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="ml-auto">
                        {this.state.isLoggedIn?<SignedInLinks/>:<SignedOutLinks/>}
                        </div>
                        
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigate;