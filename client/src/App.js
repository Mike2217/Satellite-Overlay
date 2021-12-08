
import './App.css';
import './AppImages.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <nav className='NAVBAR'>
        <div className='navitems'>
          <Link to='/' element={App}></Link>
            <a href='https://localhost:3000/'><img id='homebutton' src='https://icon-library.com/images/home-button-icon-png/home-button-icon-png-10.jpg'/></a>
        <Link to='/previous-users'></Link>
          <a href='https://localhost:3000/previous-users'><img id='prevUsersButton' src='https://media2.giphy.com/media/4NPT1ipEUoiMo/giphy.gif'/></a>
        </div>
        <div id='welcomeMessage'>
          STARLINK SATELLITE TRACKER
        </div>
      </nav>
      <div className='main-container'>
        <h1>HELLO WORLD</h1>
        <Link to='/Your-Nearest-Satellite-Data'></Link>
        <a href='https://localhost:3000/Your-Nearest-Satellite-Data'><img id='userDataButton'src='https://www.sciencenews.org/wp-content/uploads/2020/03/032820_CC_satellites_inline-4_680-626x450.png'/></a>
      </div>
      </div>
  );
}

export default App;
