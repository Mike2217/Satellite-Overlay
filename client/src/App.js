
import './App.css';
import { Routes, Route } from 'react-router-dom'
import UserLocation from './components/UserLocation';
import Navbar from "./components/Navbar";
import DisplayPreviousUsers from './components/DisplayPreviousUsers'



function App() {

  return (
    
    <div className="App">
      <Navbar />
      <UserLocation />
      <Routes>
    
        {/* <Route path='/' element={<UserData />} />
        <Route path='/Your-Nearest-Satellite-Data' element={<DisplayCurrentUser />} /> */}
        <Route path='/previous-users' element={<DisplayPreviousUsers  />} />
      </Routes>
      </div>
  );
}

export default App;
