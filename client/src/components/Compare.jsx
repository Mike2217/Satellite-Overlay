import axios from 'axios'
import { useState, useEffect } from 'react'
import React, { Component } from "react";
import UserData from './UserData';




function Compare(props) {
  // setTimeout(()=>{
  const [closestSatellite, setClosestSatellite] = useState('')
  const [Altitude, setAltitude] = useState(0)
  // const latitude = props.latitude
  // const longitude = props.longitude
  useEffect(() => {
    // console.log(props.satData)
    if (props.satData.length === 0) {
      console.log('GOOD LUCK')
    }
    else if (props.satData.length > 0) {
        const satelliteData = props.satData

        let userLocation = [props.latitude, props.longitude]
        let satLocations = []
        let latCompare = []
        let longCompare = []
        let latLongCompare = []
        let closestCompare = []
        let satNames = []
        props.satData.forEach((e) => {
          let satLatLong = (e.satlat, e.satlng)

          Math.abs(e.satlat)
          Math.abs(e.satlng)

          latCompare.push(props.latitude - e.satlat)
          longCompare.push(props.longitude - e.satlng)

          // console.log(satNames.push(e.satname))
          satLocations.push(satLatLong)
        })


        for (let i = 0; i <= satLocations.length - 1; i++) {
          if (longCompare[i] > 0) {
            let c = (latCompare[i] - longCompare[i])
            latLongCompare.push(c)
          }
          else if (longCompare[i] < 0) {
            let d = (latCompare[i] + longCompare[i])
            latLongCompare.push(d)
          }
        }
        latLongCompare.forEach((e) => {
          closestCompare.push(Math.abs(e))
        })
        // console.log(`${latLongCompare}`)
        // console.log(closestCompare)
        let satIndex = closestCompare.indexOf(Math.min.apply(Math, closestCompare))
        // console.log(props.satData)
        let closestSatelliteData = Math.min.apply(Math, closestCompare)
        setClosestSatellite(props.satData[satIndex].satname)
        // console.log(closestSatellite)
        setAltitude(props.satData[satIndex].satalt)

    
      //       console.log(`User Location: ${userLocation}`)
      //       console.log(`Satellites Near User: ${satNames}`)
      //       console.log(`Satellite Locations: ${satLocations}`)
      //       console.log(latCompare)
      //       console.log(longCompare)
      // console.log(`Closest Comparison ${closestSatelliteData}`)
      // console.log(`Altitude: ${Altitude}`)
      //       console.log(`Closest Starlink Satellite:${closestSatellite}`)
    }
    else {
      // console.log('ERROR HERE')
    }
  }, [props.satData])
    return (
      <div>
        {/* // <DisplayUsers closestSatellite={closestSatellite} altitude={altitude} /> */}
        <UserData closestSatellite={closestSatellite} Altitude={Altitude} latitude={props.latitude} longitude={props.longitude} satData={props.satData} />
      </div>
    )
    // }, 5000)
}
// setTimeout(Compare, 10000)

// }
export default Compare;