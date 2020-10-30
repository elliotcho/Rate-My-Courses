import React, {Component} from 'react';
import './css/DeadPage.css';

class DeadPage extends Component {
    render() {
        return (
            <div className="dead-page">
                <h1>Page Not Found!</h1>
                <p>The link you followed is broken or the page has been removed.</p>
                <i class="icon fas fa-poo"></i>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>|</li>
                    <li><a href="/profile">Profile</a></li>
                </ul>

            </div>
    )
    } 
}

export default DeadPage;