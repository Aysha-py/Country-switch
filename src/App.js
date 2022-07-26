import React,{useState} from 'react'
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import Countries from './pages/Countries';


function App() {

  const [countries,setCountries]= useState([])
  
  
  return (

    
    <div className="App">
    <Router>
      <Countries setCountries={setCountries} countries={countries}/>
    </Router>
     
    </div>
  );
}

export default App;
