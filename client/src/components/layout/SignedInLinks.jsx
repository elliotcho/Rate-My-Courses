import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import './css/SignedInLinks.css';

class SignedInLinks extends Component{
    signOut(e){
        e.preventDefault();
        window.localStorage.clear();
        window.location.reload();
    }

    render(){
        return(
            <div className = 'ml-auto signed-in-links'>
                <Nav>
                    <Nav.Item>
                        <Link to='/profile'>
                            <i className="fa fa-user mr-3" title="Profile"></i>
                        </Link>
                    </Nav.Item> 
                    
                    <Nav.Item>
                        <Link to='/'>
                            <i className="fa fa-cog mr-3" title="Settings"></i>
                        </Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Link to='/' onClick={this.signOut}>
                            <i className="fas fa-sign-out-alt" title="Sign Out"></i>
                        </Link>
                    </Nav.Item>
                </Nav>
            </div>
            
        )
    }
}

export default withRouter(SignedInLinks);