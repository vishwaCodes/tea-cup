import React from 'react';
import routes from './config/routes';
import TeaContainer from './containers/TeaContainer'

import { Provider } from 'react-redux';
import store from './store';

import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div>
        {routes}
        <TeaContainer />
      </div>
    </Provider>
  );
}

export default App;
