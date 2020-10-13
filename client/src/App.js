import React from 'react';
import Signup from './components/auth/Signup.jsx';
import AdminHome from './components/admin/AdminHome.jsx';
import Login from './components/auth/Login.jsx';
import Post from './components/posts/Post.jsx';
import CreatePost from './components/posts/CreatePost.jsx';
import PostList from './components/posts/PostList.jsx';
import Departments from './components/admin/Departments.jsx'
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Navigate from './components/Layout/Navigate.jsx';
import AuthModal from './components/auth/AuthModal.jsx';
function App() {
  
  // <Navigate></Navigate>
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/auth' component={AuthModal}/>
          <Route path='/admin' component={AdminHome}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/posts' component={Post}/>
          <Route exact path='/createpost' component={CreatePost}/>
          <Route exact path='/postlist' component={PostList}/>
          <Route exact path='/Departments' component={Departments}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
