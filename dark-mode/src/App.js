import Component from './Component';
import React, {useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [DarkMode, setDarkMode] = useState(true);
  return (
    
    <div className="App">
       <Component DarkMode={DarkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
