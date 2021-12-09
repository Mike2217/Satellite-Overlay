import axios from "axios";
import { useState, useEffect } from "react";
import "./UserDataStyling.css";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { postUserData, deleteUserData, BASE_URL, config } from "../services";
import DisplayCurrentUser from "./DisplayCurrentUser";

export default function UserData(props) {
  const [toggle, setToggle] = useState(false)
  const [Username, setUserName] = useState("");
  const ClosestSatellite = props.closestSatellite;
  const Longitude = props.longitude;
  const Latitude = props.latitude;
  const Altitude = props.Altitude;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUserData = {
      Username,
      Longitude,
      Latitude,
      Altitude,
      ClosestSatellite
    };
    console.log('HELLO WORLD')
    await postUserData(newUserData);

    
    setToggle(prevToggle => !prevToggle)
    // await axios.post(BASE_URL, config, newUserData)
    navigate("/Your-Nearest-Satellite-Data");
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-container">
              <div id="UserDataContainer">
                <div id="DataFormMessage">
                  <div id="DataFormWelcome">
                    Welcome to the Starlink Satellite Tracker
                  </div>
                  <div id="about">
                    <br/>
                    This Webapp will grab your current location, and show you
                    the closest Starlink satellite to your location currently.
                    <br />
                    <br />
                    <br />
                    Click on the Globe at the top right to see previous users.
                  </div>
                  <div id="prompt">
                    Enter your new Username below and click on the submit button to
                    find the nearest Starlink Satellite
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
                    <img
                      id="userDataButton"
                      src="https://www.sciencenews.org/wp-content/uploads/2020/03/032820_CC_satellites_inline-4_680-626x450.png"
                    />
                  </div>
                </form>
              </div>
            </div>
          }
        />
        <Route
        path="/Your-Nearest-Satellite-Data"
            element={
            <DisplayCurrentUser
              Username={Username}
              Longitude={Longitude}
              Latitude={Latitude}
              ClosestSatellite={ClosestSatellite}
              Altitude={Altitude}
            />
          }
        />
      </Routes>
    </div>
  );
}
