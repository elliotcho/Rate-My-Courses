import React from 'react';
import { Component } from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import logo from "../../images/logo.png";
class Navigate extends Component{
    render(){
        return(
            <div>
                <Navbar expand="lg">
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
                        <Nav className="ml-auto">
                            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
                            <Nav.Item><Nav.Link href="/about">Account</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/about">Logout</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigate;