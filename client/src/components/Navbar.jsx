import { Link } from 'react-router-dom'
import './NavbarStyling.css'


export default function Navbar() {
  return(
  <nav className='NAVBAR'>
    <div className='navitems'>
      <a href='https://localhost:3000/'><img id='homebutton' className='buttons' src='https://icon-library.com/images/home-button-icon-png/home-button-icon-png-10.jpg' /></a>
      <div><a href='https://localhost:3000/previous-users'><img id='prevUsersButton' className='buttons' src='https://media2.giphy.com/media/4NPT1ipEUoiMo/giphy.gif' /></a></div>
    </div>
    <div id='welcomeMessage'>
      WELCOME TO THE STARLINK SATELLITE TRACKER
    </div>
    </nav>
  )
}