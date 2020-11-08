import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as profileActions from '../../store/actions/profileActions';
import {getUserPosts, reloadPosts} from '../../store/actions/postActions';
import Post from '../posts/Post';
import moment from 'moment';
import "./css/Profile.css";

class Profile extends Component {
    constructor(){
        super();

        this.state = {
            numPosts: 0, 
            likesRatio: 'Loading...',
            avgRating: 'Loading...',
            user: null
        }

        this.updateLikesRatio = this.updateLikesRatio.bind(this);
        this.updateAvgRating = this.updateAvgRating.bind(this);
        this.removePostFromList = this.removePostFromList.bind(this);
        this.editPostInReducer = this.editPostInReducer.bind(this);
    }

    async componentDidMount(){
        const {uid, dispatch} = this.props;

        //load user posts into global state
        dispatch(getUserPosts(uid));

        const user = await profileActions.getUserById(uid);
        const numPosts = await profileActions.getNumPostsByUser(uid);

        await this.updateLikesRatio();
        await this.updateAvgRating();
        
        this.setState({
            numPosts,
            user
        });
    }

    async updateLikesRatio(){
        const likesRatio = await profileActions.getUserLikesRatio(this.props.uid);
        this.setState({likesRatio});
    }

    async updateAvgRating(){
        const avgRating = await profileActions.getAvgRatingByUser(this.props.uid);
        this.setState({avgRating});
    }

    async removePostFromList(id){
        let {numPosts} = this.state;
        const {dispatch, posts} = this.props;

        for(let i=0;i<posts.length;i++){
            if(posts[i].id === id){
                posts.splice(i, 1);
                numPosts--;
                break;
            }
        }

       await this.updateLikesRatio();
       await this.updateAvgRating();

       dispatch(reloadPosts(posts));

       this.setState({numPosts});
    }

    editPostInReducer(postId, newReason){
        const {dispatch, posts} = this.props;

        for(let i=0;i<posts.length;i++){
            if(posts[i].id === postId){
                posts[i].reason = newReason;
                break;
            }
        }

        dispatch(reloadPosts(posts));
    }

    render() {
        const {numPosts, likesRatio, avgRating, user} = this.state;
        const {uid, posts} = this.props;

        if(!uid){
            return <Redirect to='/'/>
        }

        const proflieBg = user && user.displayPictureColor? 
                        ({background: user.displayPictureColor}) : 
                        ({background: 'white'});

        return (
            <div className="profile-pg container-fluid">
                <section className="user-profile" style={proflieBg}>
                    <i className="icon fas fa-user-graduate fa-3x m-2"></i>
                    
                    {/* Username */}
                    <h4 className="icon name mb-5">
                        {user? user.username: 'Loading...'}
                    </h4>

                    {/* Number of posts user has created */}
                    <p className="user-info">
                        # of posts created: {numPosts}
                    </p>

                    
                    <p className="user-info">
                        % of likes from others: {likesRatio}
                    </p>

                    <p className="user-info">
                        Average rating given by user: {avgRating}
                    </p>

                    <p className="user-info">
                        Email: {user? user.email: 'Loading...'}
                    </p>

                    <p className="user-info">
                        Date joined: 

                        <span className='ml-2' style={{letterSpacing: '1.6px'}}>
                            {user? moment(new Date(user.dateCreated)).calendar(): 'Loading...'}
                        </span>
                    </p>
                </section>
                
                {posts.length !== 0 ? (<h1>Previous Posts</h1>) : null}

                <section className="prev-posts">
                    {posts.map(post => 
                        <Post
                            key={post.id}
                            uid={uid}
                            post={post}
                            creatorId={post.userId}
                            removePostFromList={this.removePostFromList}
                            editPostInReducer = {this.editPostInReducer}
                            updateLikesRatio = {this.updateLikesRatio}
                            seeMore = {false}
                        />    
                    )}
                </section>     
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        uid: state.auth.uid,
        posts: state.post.posts
    }
}

const mapDispatchToProps = (dispatch) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);