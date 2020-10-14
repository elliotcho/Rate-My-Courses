import React from 'react';
import AdminHome from './components/admin/AdminHome.jsx';
import Post from './components/posts/Post.jsx';
import CreatePost from './components/posts/CreatePost.jsx';
import PostList from './components/posts/PostList.jsx';
import DepartmentTable from './components/admin/DepartmentTable.jsx'
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import AuthModal from './components/auth/AuthModal';
import SearchCourse from './components/search/SearchCourse';
import Navigate from './components/layout/Navigate.jsx';
function App() {
  
  // <Navigate></Navigate>
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/admin' component={AdminHome}/>
          <Route exact path='/posts' component={Post}/>
          <Route exact path='/createpost' component={CreatePost}/>
          <Route exact path='/postlist' component={PostList}/>
          <Route exact path ='/courses' component={SearchCourse}/>
          
          <Route exact path='/auth' render = {() =>
            <div>

                <div>
                    <button data-toggle='modal' data-target='#auth'>
                      Sign In
                    </button>

                    <AuthModal/>
                </div>
            </div>
          }/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;