import React from 'react'
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import Countries from './pages/Countries';


function App() {


  
  
  return (

    
    <div className="App">
    <Router>
      <Countries/>
    </Router>
     
    </div>
  );
}

export default App;
