import React from 'react';
import routes from './config/routes';
import TeaContainer from './containers/TeaContainer'

// import { Provider } from 'react-redux';
// import store from './store';

import './App.css';


function App() {
  return (
      <div>
        {routes}
        <TeaContainer />
      </div>
  );
}

export default App;
