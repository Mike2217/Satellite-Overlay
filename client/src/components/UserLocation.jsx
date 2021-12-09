import { useState, useEffect } from 'react'
import SatelliteData from './SatelliteData';
import './LoadingStyle.css'


export default function UserLocation() {
const [longitude, setLongitude] = useState(null)
const [latitude, setLatitude] = useState(null)
  
  //https://developers.google.com/maps/documentation/javascript/geolocation#maps_map_geolocation-javascript
  function getLocation() {
    if (!navigator.geolocation) {
      // console.log('Geolocation is not supported by your browser');
    } else {
      // console.log('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      })
    }
  }
  useEffect(() => {
    getLocation()
  }, [])

  
  if (!longitude) return <h1 id='LoadingBar'>LOADING... PLEASE WAIT</h1>
  // console.log(longitude, latitude)

  return (
    <div>
      <SatelliteData latitude={latitude} longitude={longitude} />
    </div>
  )
}
