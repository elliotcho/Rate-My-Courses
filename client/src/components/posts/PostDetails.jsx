import React, {Component} from 'react';
import Post from './Post';

class PostDetails extends Component{
    constructor(){
        super();
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div>
                <Post/>
            </div>
        )
    }
}

export default PostDetails;