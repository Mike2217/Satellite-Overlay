import axios from 'axios'
import { useState, useEffect } from 'react'
import React, { Component } from "react";
import UserData from './UserData';


function Compare(props) {
  const latitude = props.latitude
  const longitude = props.longitude
  const satData = props.satData
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

    satNames.push(e.satname)
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
  console.log(`TEST${latLongCompare}`)
  console.log(closestCompare)
  let satIndex = closestCompare.indexOf(Math.min.apply(Math, closestCompare))
  let closestSatelliteData = Math.min.apply(Math, closestCompare)
    let closestSatellite = props.satData[satIndex].satname
    let altitude = props.satData[satIndex].altitude

    
  console.log(`User Location: ${userLocation}`)
  console.log(`Satellites Near User: ${satNames}`)
  console.log(`Satellite Locations: ${satLocations}`)
  console.log(latCompare)
  console.log(longCompare)
  console.log(`Closest Comparison ${closestSatelliteData}`)
  console.log(`Closest Starlink Satellite:${closestSatellite}`)
  props.setClosestSat(closestSatellite)


    return (
      <div>
      {/* // <DisplayUsers closestSatellite={closestSatellite} altitude={altitude} /> */}
      <UserData closestSatellite={closestSatellite} altitude={altitude} latitude={latitude} longitude={longitude} satData={satData}  />
      </div>
    )
}

export default Compare;