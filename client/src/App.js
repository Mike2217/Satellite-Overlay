
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { grabUserData, config, BASE_URL } from './services'
import UserLocation from './components/UserLocation';
import UserData from './components/UserData';
import Navbar from './components/Navbar';
import SatelliteData from './components/SatelliteData';
import HomePage from './components/HomePage'
import DisplayCurrentUser from './components/DisplayCurrentUser'
import DisplayPreviousUsers from './components/DisplayPreviousUsers'



function App() {
  const [toggle, setToggle] = useState(false)
  const [previousUsers, setPreviousUsers] = useState([])

  useEffect(() => {
    const getAllUserData = async () => {
      console.log(BASE_URL, config)
      const response = await axios.get(BASE_URL, config)
      console.log(response)
      setPreviousUsers(response)
    }
    getAllUserData()
  }, [toggle])



  return (
    
    <div className="App">
      <UserLocation />
      <Navbar />
      <Routes>
        {/* FIX BELOW
        <Route path='/' component={<HomePage />} />
        <Route path='/Your-Nearest-Satellite-Data' component={<DisplayCurrentUser />} />
        <Route path='/previous-users' component={<DisplayPreviousUsers  />} /> */}
      </Routes>
      <div className='main-container'>
        <UserData/>
      </div>
      </div>
  );
}

export default App;
