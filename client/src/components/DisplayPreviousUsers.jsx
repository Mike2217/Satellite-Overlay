import './DisplayPreviousUsersStyling.css'

import axios from 'axios'
import { useState, useEffect } from 'react'
import { config, BASE_URL } from '../services'



export default function DisplayPreviousUsers() {
  
  const [previousUsers, setPreviousUsers] = useState([])
  // const [prevUserName, setPrevUserName] = useState([])
  // const [prevLongitude, setPrevLongitude] = useState([])
  // const [prevLatitude, setPrevLatitude] = useState([])
  // const [prevCloseSat, setPrevCloseSat] = useState([])
  // const [prevAltitude, setPrevAltitude] = useState([])

  // const prevUserData=[]
  // const prevUserName = []
  // const prevLongitude = []
  // const prevLatitude = []
  // const prevCloseSat= []
  // const prevAltitude = []
  
  // prevUserName.push(previousUsers[i].fields.Username)
  //   prevLongitude.push(previousUsers[i].fields.Longitude)
  //   prevLatitude.push(previousUsers[i].fields.Latitude)
  //   prevCloseSat.push(previousUsers[i].fields.ClosestSatellite)
  //   prevAltitude.push(previousUsers[i].fields.Altitude)

  // <td>{e.fields.Username]}</td>
  // <td>{e.fields.Longitude}</td>
  // <td>{e.fields.Latitude}</td>
  // <td>{e.fields.ClosestSatellite}</td>
  // <td>{e.fields.Altitude}</td>

          
        // previousUsers.map((e) => {


  useEffect(() => {
    const getAllUserData = async () => {
      console.log(BASE_URL, config)
      const res = await axios.get(BASE_URL, config)
      console.log(res)
      setPreviousUsers(res.data.records)
    }
      getAllUserData()
  }, [])
  for(let i = 0; i<= previousUsers.length; i++) {
    return (
    <div className='main-container'>
      <table id='userTable'>
          <thead>
            <tr>
              <th>Username</th>
              <th>Longitude</th>
              <th>Latitude</th>
              <th>ClosestSatellite</th>
              <th>Atlitude</th>
            </tr>
          </thead>
        <tbody>
        {previousUsers.map((e) => (
            <tr>
            <td>{e.fields.Username}</td>
            <td>{e.fields.Longitude}</td>
            <td>{e.fields.Latitude}</td>
            <td>Satellite: {e.fields.ClosestSatellite}</td>
            <td>{e.fields.Altitude}</td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
    )
  }
  return (
    <div className='main-container'>
      <div>
    </div>
      <h1>BEANS</h1>
        {/* {
        previousUsers.map((e) => {
          <ul>
                  <li>{e.fields["Username"]}</li>
                  <li>{e.fields["Longitude"]}</li>
                  <li>{e.fields["Latitude"]}</li>
                  <li>{e.fields["ClosestSatellite"]}</li>
            <li>{e.fields.Altitude}</li>
            </ul>
        })} */}
    
    </div>
  )
}