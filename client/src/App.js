import React from 'react';
import SignUp from './components/auth/SignUp.jsx';
import AdminHome from './components/admin/AdminHome.jsx';
import LogIn from './components/auth/LogIn.jsx';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SignUp}/>
          <Route path='/admin' component={AdminHome}/>
          <Route exact path='/login' component={LogIn}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
