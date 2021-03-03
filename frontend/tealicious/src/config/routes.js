import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TeaContainer from '../containers/TeaContainer';
import HomePage from '../pages/HomePage';
import TeasList from '../components/TeasList';

export default (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/teas' component={TeaContainer} />
    <Route path='/:teaID' component={TeasList}/>
  </Switch>
);

