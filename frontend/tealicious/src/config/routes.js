import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TeaContainer from '../containers/TeaContainer';
import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import WishlistPage from '../pages/WishlistPage';

export default (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/teas' component={TeaContainer} />
      <Route path='/login' component={LoginPage} />
      <Route path='/signup' component={SignupPage} />
      <Route path='/wishlist' component={WishlistPage} />
    </Switch>
);

