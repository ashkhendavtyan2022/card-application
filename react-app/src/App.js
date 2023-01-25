import React from 'react';
import './App.css';
import { AppProvider } from './Context/Context';
import { Instructions } from './Components/Instructions';
import { Project } from './Components/Project';

function App() {

  return (
    <AppProvider>
      <div className="App">
        <Project />
       <Instructions />        
      </div>
    </AppProvider>
  );
}

export default App;
