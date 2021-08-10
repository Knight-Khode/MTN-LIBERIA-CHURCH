import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Component/Pages/Home';
import Signup from './Component/Pages/Signup';
import Login from './Component/Pages/Login';
import Admin from './Component/Pages/Admin';
import AdminState from './context/admin/AdminState';
import AuthState from './context/auth/AuthState';
import User from './Component/Pages/User';
import PrivateRoute from './Component/routing/PrivateRoute';
import PrivateRoute2 from './Component/routing/PrivateRoute2';
import AdminLogin from './Component/Pages/AdminLogin';
import './App.css'

function App() {
  return (
    <AuthState>
      <AdminState>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            <PrivateRoute exact path="/admin" component={Admin}/>
            <Route exact path="/adminLogin" component={AdminLogin}/>
            <PrivateRoute2 exact path="/user" component={User}/>
          </Switch>
        </Router>
      </AdminState>
    </AuthState>
  );
}

export default App;
