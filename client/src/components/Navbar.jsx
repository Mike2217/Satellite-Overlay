import './NavbarStyling.css'
import { Link } from "react-router-dom";


export default function Navbar() {
  // const navigate = useNavigate();
  // function PrevNav() {
  //   navigate('/');
    // navigate('/previous-users');
  // }
  return(
  <nav className='NAVBAR'>
    <div className='navitems'>
      <Link to='/'><img id='homebutton'  className='buttons' alt='Home-Button' src='https://icon-library.com/images/home-button-icon-png/home-button-icon-png-10.jpg' /></Link>
      <Link to='/previous-users'><img id='prevUsersButton' alt='Previous-Users'className='buttons' src='https://media2.giphy.com/media/4NPT1ipEUoiMo/giphy.gif' /></Link>
    </div>
    <div id='welcomeMessage'>
      WELCOME TO THE STARLINK SATELLITE TRACKER
    </div>
    </nav>
  )
}