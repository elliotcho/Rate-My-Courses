import React from 'react';
import {Link} from 'react-router-dom';
import './css/DeadPage.css';

function DeadPage(){
    return (
        <div className="dead-page">
            <h1 className='my-4'>
                Page Not Found!
            </h1>
                
            <p>The link you followed is broken or the page has been removed.</p>

            <div className='my-5'>
                <i class="fas fa-poo"></i>         
            </div>       
          
            <ul>
                <Link to='/'>
                        <li>Home</li>
                </Link>
                    
                <li>|</li>

                <Link to='/profile'>
                    <li>Profile</li>
                </Link>
            </ul>
        </div>
    )
}

export default DeadPage;