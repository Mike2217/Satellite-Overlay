
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { grabUserData, config, BASE_URL } from './services'
import UserData from './components/UserData';
import UserLocation from './components/UserLocation';

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
      <UserLocation/>
      <Routes>
        {/* <Route exact path='/' component={App} />
        <Route exact path='/Your-Nearest-Satellite-Data' component={DisplayCurrentUser} />
        <Route exact path='/previous-users' component={DisplayUsers} /> */}
      </Routes>
      <nav className='NAVBAR'>
        <div className='navitems'>
          <a href='https://localhost:3000/'><img id='homebutton' src='https://icon-library.com/images/home-button-icon-png/home-button-icon-png-10.jpg' /></a>
          <a href='https://localhost:3000/previous-users'><img id='prevUsersButton' src='https://media2.giphy.com/media/4NPT1ipEUoiMo/giphy.gif'/></a>
        </div>
        <div id='welcomeMessage'>
          STARLINK SATELLITE TRACKER
        </div>
      </nav>
      <div className='main-container'>
        <UserData/>
      </div>
      </div>
  );
}

export default App;
