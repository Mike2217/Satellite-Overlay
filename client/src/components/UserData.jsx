import axios from 'axios'
import { useState, useEffect } from 'react'


export default function UserData(props) {
  const [Username, setUserName] = useState('')
  let Latitude = props.latitude
  let Longitude = props.longitude
  let closestSatellite = props.closestSat

  const handleSubmit = async (e) => {

    e.preventDefault()
    const newUserData = {
      Username,
      Longitude,
      Latitude,
      Altitude,
      closestSatellite
    }
    await axios.post(`https://api.airtable.com/v0/appBTsthJKqmbHxPy/DATA?api_key=${process.env.airTable_base}`, newUserData);
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={Username}
        name='title'
        onChange={(e) => setUserName(e.target.value)}
      />
      </form>
    </div>


  )

  }