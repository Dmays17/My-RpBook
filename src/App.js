import React, { useState } from 'react';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

// import './App.css';
import { StyledContainer } from './components/Styles';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// auth and redux
import AuthRoute from './components/AuthRoute';
import BasicRoute from './components/BasicRoute';
import {connect} from 'react-redux';

function App() {
  return (
    <Router>

      {checked &&
      <StyledContainer>
        <Switch>
          <BasicRoute path='/Signup'>
            <Signup />
            </BasicRoute>
            <BasicRoute path='/Login'>
            <Login />
          </BasicRoute>
          <AuthRoute path='/Dashboard'>
            <Dashboard />
          </AuthRoute>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </StyledContainer>
      }
    </Router>
  )
}
const mapStateToProps = ({session}) => ({
  checked: session.checked
})

export default connect(mapStateToProps)(App);