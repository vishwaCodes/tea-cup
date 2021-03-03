import React from 'react';
import TeaContainer from './containers/TeaContainer';
import TeaList from './containers/TeaList';

import './App.css';


function App() {
  return (
    <div className="App">
      <TeaContainer>
        <TeaList />
      </TeaContainer>
    </div>
  );
}

export default App;
