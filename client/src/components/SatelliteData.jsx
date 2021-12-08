import axios from 'axios'
import { useState, useEffect } from 'react'
import UserData from './UserData'
import Compare from './Compare'




export default function SatelliteData(props) {
  
  const [satData, setSatData] = useState([])
  const latitude = props.latitude
  const longitude = props.longitude
  useEffect(() => {
    const getSatData = async () => {
      // const satUrl1 = `https://api.n2yo.com/rest/v1/satellite/positions/25544/${latitude}/${longitude}/0/2/&apiKey=${n2yoKey}`
      const satUrl = `https://boiling-mountain-84087.herokuapp.com/https://api.n2yo.com/rest/v1/satellite/above/${latitude}/${longitude}/0/60/52/&apiKey=${process.env.n2yoKey}`
      const res = await axios.get(satUrl)
      console.log(res)
      console.log(res.data.above)
      setSatData(res.data.above)
    }
    console.log(satData)
    getSatData()
  }, [])
  return (
    <div>
      <Compare satData={satData} longitude={longitude} latitude={latitude}/>
    </div>
    
  )
}

