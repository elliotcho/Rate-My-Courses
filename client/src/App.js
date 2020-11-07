import React from 'react';
import AdminHome from './components/admin/AdminHome.jsx';
import PostList from './components/posts/PostList.jsx';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import SearchCourse from './components/search/SearchCourse.jsx';
import Navigate from './components/layout/Navigate.jsx';
import Profile from './components/profile/Profile.jsx';
import DeadPage from './components/layout/DeadPage.jsx';
import Settings from './components/settings/Settings.jsx';
import PostDetails from './components/posts/PostDetails.jsx';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navigate/>

        <Switch>
          <Route exact path='/' component={SearchCourse}/>
          <Route exact path='/admin' component={AdminHome}/>
          <Route exact path='/admin/:type' component={AdminHome}/>
          <Route exact path='/posts/:id' component={PostList}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path= '/settings' component={Settings}/>
          <Route exact path= '/post/:id' component={PostDetails}/>
          <Route path = '/' component={DeadPage}/>
          

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;