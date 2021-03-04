import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import TeaContainer from '../containers/TeaContainer';
import HomePage from '../pages/HomePage';
import TeasList from '../components/TeasList';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';

export default (
  <Router>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/teas' component={TeaContainer} />
      <Route path='/:teaID' component={TeasList} />
      <Route path='/login' component={LoginPage} />
      <Route path='/signup' component={SignupPage} />
    </Switch>
  </Router>
);

