import React from 'react';
import AdminHome from './components/admin/AdminHome.jsx';
import PostList from './components/posts/PostList.jsx';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import SearchCourse from './components/search/SearchCourse';
import Navigate from './components/layout/Navigate.jsx';
import Profile from './components/profile/Profile.jsx';
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
          <Route exact path='/profile' component={Profile}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;