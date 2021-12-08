
import './App.css';
import './AppImages.css'
// import Compare from './Compare.jsx'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'


import Compare  from './components/Compare';
import UserData from './components/UserData';

function App() {


  return (
    <div className="App">
      <nav className='NAVBAR'>
        <Link to='/'><button id='HomeButton'>HOME</button></Link>
        <Link to='/previous-users'><button id='PreviousUsers'>Previous Users</button></Link>
      </nav>
      <h1>HELLO WORLD</h1>
    </div>
  );
}

export default App;
