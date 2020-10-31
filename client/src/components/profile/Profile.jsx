import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserPosts} from '../../store/actions/postActions';
import Post from '../posts/Post';
import "./css/Profile.css";

class Profile extends Component {
    constructor(){
        super();

        this.state = {
            userPosts: []
        }
    }

    async componentDidMount(){
        const {uid} = this.props;

        const userPosts = await getUserPosts(uid);
        
        this.setState({userPosts});
    }

    render() {
        const {uid} = this.props;
        const {userPosts} = this.state;

        if(!uid){
            return <Redirect to='/'/>
        }

        return (
            <div className="profile-pg container-fluid">
                <section className="user-profile">
                    <i className="icon fas fa-user-graduate fa-3x m-2"></i>
                    <h4 className="icon name mb-5">otw_up</h4>
                    <p className="user-info"># of courses rated: 69</p>
                    <p className="user-info">Average rating given: 6.9/10</p>
                    <p className="user-info">Likes to dislikes ratio: 4/1</p>
                    <p className="user-info">Year of study: 4th</p>
                    <p className="user-info">Program type: Undergraduate</p>
                </section>
                
                <h1>Previous Posts</h1>

                <section className="prev-posts">
                    {userPosts.map(post => 
                        <Post
                            key={post.id}
                            courseId={post.courseId}
                            reason={post.reason}
                            stars={post.stars}
                            dateCreated={post.dateCreated}
                            userId ={post.userId}
                            likes={post.likes}
                            dislikes={post.dislikes}
                        />    
                    )}
                </section>     
            </div>
        )
    }
}

const mapStateToProps = (state) => ({uid: state.auth.uid});

export default connect(mapStateToProps)(Profile);