
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'


function App() {

  // const [userLocation, setUserLocation] = useState({})
  const [longitude, setLongitude] = useState(0)
  const [latitude, setLatitude] = useState(0)
  const [satData, setSatData] = useState([])
  const [airTableData, setAirTableData] = useState([])
  const [closestLat, setClosestLat] = useState(0)
  const [closestLong, setClosestLong] = useState(0)

  function getLocation() {
    if (navigator.geolocation) {
      // navigator.geolocation.getCurrentPosition();
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert('SOMETHING WENT HORRIBLY WRONG')
    }
  }
  getLocation()
  
  function showPosition(position) {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
  }
  
  
  // function getCoordinates() {
  //   const a = (userLocation.coords)
  //   // const b = Object.values(userLocation.coords.longitude)
  //   console.log(a)
  // }
  // const latitude = '38.907'
  // const longitude = '77.036'
  const n2yoKey = 'BUJ9QV-C4CCPB-GR8F9N-4SYT'
  // const config = {
  //   headers: {
  //   'Access-Control-Allow-origin': '*'
  //   }
  // }
  const airTable_key = 'keyUzKn8OBjGuFH9B'
  const airTable_base = 'appBTsthJKqmbHxPy'



  useEffect(() => {
    const getSatData = async () => {
      // const satUrl1 = `https://api.n2yo.com/rest/v1/satellite/positions/25544/${latitude}/${longitude}/0/2/&apiKey=${n2yoKey}`
      const satUrl = `https://boiling-mountain-84087.herokuapp.com/https://api.n2yo.com/rest/v1/satellite/above/${latitude}/${longitude}/0/60/52/&apiKey=${n2yoKey}`
      const res = await axios.get(satUrl)
      console.log(res)
      console.log(res.data.above)
      setSatData(res.data.above)


    }
    getSatData()
  }, [])

  function compare() {
    let userLocation = [latitude, longitude]
    let satLocations = []
    let latCompare = []
    let longCompare = []
    let latLongCompare = []
    let latLongArray = []
    // console.log(satData)
    satData.forEach((e) => {
      let satLatLong = (e.satlat, e.satlng)
      // latCompare.push(latitude - e.satlat)
      // longCompare.push(longitude - e.satlng)
      // latLongObject.push(latCompare, longCompare)
      // latLongArray.push(latitude - e.satlat)
      // latLongArray.push(longitude - e.satlng)

      if (e.satlat > 0) {
        latCompare.push(latitude - e.satlat)
        latLongArray.push(latitude - e.satlat)
      }
      else if (e.satlat < 0) {
        latCompare.push(latitude + e.satlat)
        latLongArray.push(latitude + e.satlat)

        
      }
      if (e.satlng > 0) {
        longCompare.push(longitude - e.satlng)
        latLongArray.push(longitude - e.satlng)

      }
      else if (e.satlng < 0) {
        longCompare.push(longitude + e.satlng)
        latLongArray.push(longitude + e.satlng)

      }
      satLocations.push(satLatLong)
    })
    for (let i = 0; i <= satLocations.length -1; i++){
      if (longCompare > 0) {
        let c = (latCompare[i] - longCompare[i])
        latLongCompare.push(c)
      }
      else if (longCompare[i] < 0) {
        let d = (latCompare[i] + longCompare[i])
        latLongCompare.push(d, satData[i])
      }
    }
    latLongCompare.sort()
    let closestSatellite = latLongCompare[0]
    console.log(`User Location: ${userLocation}`)
    console.log(`Satellite Locations: ${satLocations}`)
    // console.log(latCompare)
    // console.log(longCompare)
    console.log(`Closest Comparison ${latLongCompare}`)
    console.log(closestSatellite)
    // console.log(latLongObject)
    // console.log(latLongArray)
  }







  return (
    <div className="App">
      <h1>HELLO WORLD</h1>
      {/* <button onClick={getLocation}>CLICK THIS BUTTON</button> */}
      <button onClick={compare}>COMPARE LOCATIONS</button>
    </div>
  );
}

export default App;
