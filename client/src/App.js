import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Component/Pages/Home';
import Signup from './Component/Pages/Signup';
import Login from './Component/Pages/Login';
import Admin from './Component/Pages/Admin';
import AdminState from './context/admin/AdminState';
import './App.css'

function App() {
  return (
    <AdminState>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/admin" component={Admin}/>
        </Switch>
      </Router>
    </AdminState>
  );
}

export default App;
