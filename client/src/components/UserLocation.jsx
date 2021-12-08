import { useState, useEffect } from 'react'
import SatelliteData from './SatelliteData';

export default function UserLocation() {
const [longitude, setLongitude] = useState(0)
const [latitude, setLatitude] = useState(0)
  
  //https://developers.google.com/maps/documentation/javascript/geolocation#maps_map_geolocation-javascript
  function getLocation() {
    if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition)
    } else {
      alert('SOMETHING WENT HORRIBLY WRONG')
    }
  }
  function showPosition(position) {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
  }
  getLocation()

  console.log(latitude, longitude)
  return (
    <div>
      <SatelliteData latitude={latitude} longitude={longitude} />
    </div>
  )
}
