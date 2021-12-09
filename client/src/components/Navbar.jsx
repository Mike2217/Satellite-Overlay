import './NavbarStyling.css'
import { Link, Routes, Route, useNavigate } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate();
  function PrevNav() {
    navigate('/previous-users');
  }
  return(
  <nav className='NAVBAR'>
    <div className='navitems'>
      <Link to='/'><img id='homebutton' onClick={PrevNav} className='buttons' src='https://icon-library.com/images/home-button-icon-png/home-button-icon-png-10.jpg' /></Link>
      <Link to='/previous-users'><img id='prevUsersButton' className='buttons' src='https://media2.giphy.com/media/4NPT1ipEUoiMo/giphy.gif' /></Link>
    </div>
    <div id='welcomeMessage'>
      WELCOME TO THE STARLINK SATELLITE TRACKER
    </div>
    </nav>
  )
}