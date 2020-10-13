import React from 'react';
import SignUp from './components/auth/SignUp.jsx';
import AdminHome from './components/admin/AdminHome.jsx';
import LogIn from './components/auth/LogIn.jsx';
import Post from './components/posts/Post.jsx';
import CreatePost from './components/posts/CreatePost.jsx';
import PostList from './components/posts/PostList.jsx';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/auth' component={SignUp}/>
          <Route path='/admin' component={AdminHome}/>
          <Route exact path='/login' component={LogIn}/>
          <Route exact path='/posts' component={Post}/>
          <Route exact path='/createpost' component={CreatePost}/>
          <Route exact path='/postlist' component={PostList}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
