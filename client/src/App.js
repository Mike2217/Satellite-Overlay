
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { grabUserData, config, BASE_URL } from './services'
import UserLocation from './components/UserLocation';
import UserData from './components/UserData';
import SatelliteData from './components/SatelliteData';
import HomePage from './components/HomePage'
import Navbar from "./components/Navbar";
import DisplayCurrentUser from './components/DisplayCurrentUser'
import DisplayPreviousUsers from './components/DisplayPreviousUsers'



function App() {

  return (
    
    <div className="App">
      <Navbar />
      <UserLocation />
      <Routes>
        {/* FIX BELOW
        <Route path='/' component={<HomePage />} />
        <Route path='/Your-Nearest-Satellite-Data' component={<DisplayCurrentUser />} />
        <Route path='/previous-users' component={<DisplayPreviousUsers  />} /> */}
      </Routes>
        {/* <UserData/> */}
      </div>
  );
}

export default App;
