import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserPosts} from '../../store/actions/postActions';
import {getUserById} from '../../store/actions/profileActions';
import Post from '../posts/Post';
import "./css/Profile.css";

class Profile extends Component {
    constructor(){
        super();

        this.state = {
            userPosts: [], 
            user: null
        }

        this.removePostFromList = this.removePostFromList.bind(this);
    }

    async componentDidMount(){
        const {uid} = this.props;

        const userPosts = await getUserPosts(uid);
        const user = await getUserById(uid);
        
        this.setState({
            userPosts,
            user
        });
    }

    removePostFromList(id){
        const {posts} = this.state;

        for(let i=0;i<posts.length;i++){
            if(posts[i].id === id){
                posts.splice(i, 1);
                break;
            }
        }

        this.setState({posts});
    }

    render() {
        const {userPosts, user} = this.state;
        const {uid} = this.props;

        if(!uid){
            return <Redirect to='/'/>
        }

        return (
            <div className="profile-pg container-fluid">
                <section className="user-profile">
                    <i className="icon fas fa-user-graduate fa-3x m-2"></i>
                    <h4 className="icon name mb-5">{user? user.username: 'Loading...'}</h4>
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
                            uid={uid}
                            post={post}
                            creatorId={post.userId}
                            removePostFromList={this.removePostFromList}
                        />    
                    )}
                </section>     
            </div>
        )
    }
}

const mapStateToProps = (state) => ({uid: state.auth.uid});

export default connect(mapStateToProps)(Profile);