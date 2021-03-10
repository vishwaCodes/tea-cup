import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TeasPage from '../pages/TeasPage';
import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import WishlistPage from '../pages/WishlistPage';
import ShopPage from '../pages/ShopPage';
import AboutPage from '../pages/AboutPage';


export default (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/teas' component={TeasPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/signup' component={SignupPage} />
      <Route exact path='/wishlist' component={WishlistPage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/about' component={AboutPage} />
    </Switch>
);

