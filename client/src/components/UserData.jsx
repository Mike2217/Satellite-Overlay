import axios from "axios";
import { useState, useEffect } from "react";
import "./UserDataStyling.css";
import { postUserData, deleteUserData } from "../services";

export default function UserData(props) {
  const [Username, setUserName] = useState("");
  const ClosestSatellite = props.closestSatellite;
  const Longitude = props.longitude;
  const Latitude = props.latitude;
  const Altitude = props.Altitude;


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
  };

  return (
    <div>
    <div className='main-container'>
    <div id="UserDataContainer" >
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
      </div>
      </div>
  );
}
