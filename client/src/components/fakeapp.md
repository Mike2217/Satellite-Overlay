  // const [userLocation, setUserLocation] = useState({})

  // const [satData, setSatData] = useState([])
  // const [airTableData, setAirTableData] = useState([])
  // const [closestLat, setClosestLat] = useState(0)
  // const [closestSat, setClosestSat] = useState(null)


  // function getLocation() {
  //   if (navigator.geolocation) {
  //     // navigator.geolocation.getCurrentPosition();
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     alert('SOMETHING WENT HORRIBLY WRONG')
  //   }
  // }
  // getLocation()
  
  // function showPosition(position) {
  //   setLatitude(position.coords.latitude)
  //   setLongitude(position.coords.longitude)
  // }
  
  // function getCoordinates() {
  //   const a = (userLocation.coords)
  //   // const b = Object.values(userLocation.coords.longitude)
  //   console.log(a)
  // }
  // const latitude = '38.907'
  // const longitude = '77.036'
  // const n2yoKey = 'BUJ9QV-C4CCPB-GR8F9N-4SYT'
  // const config = {
  //   headers: {
  //   'Access-Control-Allow-origin': '*'
  //   }
  // }



  useEffect(() => {
    const getSatData = async () => {
      // const satUrl1 = `https://api.n2yo.com/rest/v1/satellite/positions/25544/${latitude}/${longitude}/0/2/&apiKey=${n2yoKey}`
      const satUrl = `https://boiling-mountain-84087.herokuapp.com/https://api.n2yo.com/rest/v1/satellite/above/${latitude}/${longitude}/0/60/52/&apiKey=${process.env.n2yoKey}`
      const res = await axios.get(satUrl)
      console.log(res)
      console.log(res.data.above)
      setSatData(res.data.above)


    }
    getSatData()
  }, [])

  // function compare() {
  //   let userLocation = [latitude, longitude]
  //   let satLocations = []
  //   let latCompare = []
  //   let longCompare = []
  //   let latLongCompare = []
  //   let closestCompare = []
  //   let satNames = []
  //   // console.log(satData)
  //   satData.forEach((e) => {
  //     let satLatLong = (e.satlat, e.satlng)
  //     // latCompare.push(latitude - e.satlat)
  //     // longCompare.push(longitude - e.satlng)
  //     // latLongObject.push(latCompare, longCompare)
  //     // latLongArray.push(latitude - e.satlat)
  //     // latLongArray.push(longitude - e.satlng)
  //     Math.abs(e.satlat)
  //     Math.abs(e.satlng)
  //     latCompare.push(latitude - e.satlat)
  //     longCompare.push(longitude - e.satlng)
  //     satNames.push(e.satname)
  //     // if (e.satlat > 0) {
  //     //   latCompare.push(latitude - e.satlat)
  //     //   latLongArray.push(latitude - e.satlat)
  //     // }
  //     // else if (e.satlat < 0) {
  //     //   latCompare.push(latitude + e.satlat)
  //     //   latLongArray.push(latitude + e.satlat)
        
  //     // }
  //     // if (e.satlng > 0) {
  //     //   longCompare.push(longitude - e.satlng)
  //     //   latLongArray.push(longitude - e.satlng)

  //     // }
  //     // else if (e.satlng < 0) {
  //     //   longCompare.push(longitude + e.satlng)
  //     //   latLongArray.push(longitude + e.satlng)

  //     // }
  //     satLocations.push(satLatLong)
  //   })

  //   // satLocations.forEach((e) => {
  //   //   Math.abs(latCompare, longCompare)
  //   //   let c = latCompare - longCompare
  //   //   latLongCompare.push(c)
  //   // })
  //   for (let i = 0; i <= satLocations.length - 1; i++) {
  //     if (longCompare[i] > 0) {
  //       let c = (latCompare[i] - longCompare[i])
  //       latLongCompare.push(c)
  //     }
  //     else if (longCompare[i] < 0) {
  //       let d = (latCompare[i] + longCompare[i])
  //       latLongCompare.push(d)
  //     }
  //   }
  //   latLongCompare.forEach((e) => {
  //     closestCompare.push(Math.abs(e))
  //   })
  //   console.log(`TEST${latLongCompare}`)
  //   console.log(closestCompare)
  //   let satIndex = closestCompare.indexOf(Math.min.apply(Math, closestCompare))
  //   let closestSatelliteData = Math.min.apply(Math, closestCompare)
  //   let closestSatellite = satData[satIndex].satname
  //   // let closestSatellite = latLongCompare[0]
  //   // satData.forEach((e) => {
  //   //   console.log(e)
  //   //   console.log(Math.abs(e.satlng))
  //   //   console.log(Math.abs(e.satlat))
  //   //   if ((e.satlng - e.satlat) == closestSatellite) {
  //   //   test.push(e.satname)
  //   //   }
  //   // })
  //   // for (let i = 0; i <= satData.length; i++){
  //   // Math.abs(satData.satlng)
  //   // Math.abs(satData.satlat)
  //   // if ((satData.satlng - satData.satlat) == closestSatellite) {
  //   //   test.push(satData[i].satname)
  //   // } else {
  //   //   console.log('error')
  //   // }
  //   // }
  //   // console.log(`PLEASE WORK ${test}`)
  //   console.log(`User Location: ${userLocation}`)
  //   console.log(`Satellites Near User: ${satNames}`)
  //   console.log(`Satellite Locations: ${satLocations}`)
  //   console.log(latCompare)
  //   console.log(longCompare)
  //   console.log(`Closest Comparison ${closestSatelliteData}`)
  //   console.log(`Closest Starlink Satellite:${closestSatellite}`)
  //   // console.log(latLongObject)
  //   // console.log(latLongArray)
  // }