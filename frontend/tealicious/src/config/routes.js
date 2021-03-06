import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TeasPage from '../pages/TeasPage';
import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import WishlistPage from '../pages/WishlistPage';
import ShopPage from '../pages/ShopPage';


export default (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/teas' component={TeasPage} />
      <Route path='/login' component={LoginPage} />
      <Route path='/signup' component={SignupPage} />
      <Route path='/wishlist' component={WishlistPage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
);

