import React from 'react';
import AdminHome from './components/admin/AdminHome.jsx';
import Post from './components/posts/Post.jsx';
import CreatePost from './components/posts/CreatePost.jsx';
import PostList from './components/posts/PostList.jsx';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import SearchCourse from './components/search/SearchCourse';
import Navigate from './components/layout/Navigate.jsx';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Navigate/>

      <BrowserRouter>
        <Switch>
          <Route exact path='/admin' component={AdminHome}/>
          <Route exact path='/admin/:type' component={AdminHome}/>
          <Route exact path='/posts' component={PostList}/>
          <Route exact path ='/courses' component={SearchCourse}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;