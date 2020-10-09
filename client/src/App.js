import React from 'react';
import SignUp from './components/auth/SignUp.jsx';
import AdminHome from './components/admin/AdminHome.jsx';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/auth' component={SignUp}/>
          <Route path='/admin' component={AdminHome}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
