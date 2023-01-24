import React from 'react';
import './App.css';
import { Footer } from './Components/Footer';
import { Instructions } from './Components/Instructions';
import { Main } from './Components/Main';

function App() {

  return (
    <div className="App">
      <div className="app-main">
        <Main />
        <Footer />
      </div>
      <div className="app-intructions">
        <Instructions />
      </div>
      
    </div>
  );
}

export default App;
