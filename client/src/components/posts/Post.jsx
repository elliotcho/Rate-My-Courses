import React, {Component} from 'react';
import './css/Post.css';


class Post extends Component{
    render(){
        const JS = 0;
        return(
            <div className="post-body">
                <h1>Active Posts </h1>
                <table className="post-table">
                    <tr><th>Course Number </th>
                        <th>Experience</th>
                        <th>Course Taken in</th>
                        <th>Date Posted:</th> 
                        </tr>
                    <tr>    <td> MATH 72613</td>   {/*course id*/}
                            <td>blah blah blah blah blah blah blah</td>   {/*content of post*/}
                            <td> April 2019</td>   {/*year course was taken by user*/}
                            <td> today </td>   {/*date post created*/}
                             </tr>
                    <tr>    <th>Stars:</th>
                            <th>Likes: </th>
                            <th>Dislikes</th>
                             </tr>
                    <tr>
                        <td>{JS}</td>   {/*number of stars*/}
                        <td> <button>Like</button> {JS} </td>   {/*like btn & current # of Likes*/}
                        <td> <button>Dislike</button> {JS} </td>    {/*dislike btn & current # of dislikes*/}
                    </tr>
                </table>
            </div>
        )
        
    }
}

export default Post;