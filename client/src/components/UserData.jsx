import axios from "axios";
import { useState, useEffect } from "react";
import "./UserDataStyling.css";
import { postUserData, deleteUserData } from "../services";
import { useNavigate, useParams } from "react-router-dom";
import { config, BASE_URL } from "../services";

export default function UserData(props) {
  const navigate = useNavigate();
  const [Username, setUserName] = useState("");
  const ClosestSatellite = props.closestSatellite;
  const Longitude = props.longitude;
  const Latitude = props.latitude;
  const Altitude = props.altitude;
  // const [ClosestSatellite, setClosestSatellite] = useState()
  // const [Latitude, setLatitude] = useState(0)
  // const [Longitude, setLongitude] = useState(0)
  // const [Altitude, setAltitude] = useState(0)
  console.log(ClosestSatellite);
  console.log(props.closestSatellite);

  // useEffect(() => {
  //   setClosestSatellite(props.closestSatellite)
  //   setLatitude(props.latitude)
  //   setLongitude(props.longitude)
  //   setClosestSatellite(props.closestSat)
  //   setAltitude(props.Altitude)
  // })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUserData = {
      Username,
      Longitude,
      Latitude,
      Altitude,
      ClosestSatellite,
    };
    postUserData(newUserData);
    // await axios.post(BASE_URL, config, {
    // Username,
    // Longitude,
    // Latitude,
    // Altitude,
    // ClosestSatellite
    // })
    // props.setToggle(prevToggle => !prevToggle)
  };

  return (
    <div id="UserDataContainer">
      <div id="DataFormMessage">
        <div id="DataFormWelcome">
          Welcome to the Starlink Satellite Tracker
        </div>
        <div id="about">
          This Webapp will grab your current location, and show you the closest
          Starlink satellite to your location currently.
        </div>
        <div id="prompt">
          Enter your new Username below and click on the satellite to find the
          nearest Starlink Satellite
        </div>
      </div>
      <form onSubmit={handleSubmit} id="DataFormContainer">
        <input
          id="UserDataForm"
          placeholder="Enter your new Username"
          type="text"
          value={Username}
          name="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit" id="submitButton">
          Submit
        </button>
        <div id="dataButtonContainer">
          <a href="https://localhost:3000/Your-Nearest-Satellite-Data">
            <img
              id="userDataButton"
              src="https://www.sciencenews.org/wp-content/uploads/2020/03/032820_CC_satellites_inline-4_680-626x450.png"
            />
          </a>
        </div>
      </form>
    </div>
  );
}
