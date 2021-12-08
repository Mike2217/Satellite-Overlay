
export function UserLocation() {
const [longitude, setLongitude] = useState(0)
const [latitude, setLatitude] = useState(0)

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
  return (
    <div>
      <SatelliteData latitude={latitude} longitude={longitude} />
      <Compare latitude={latitude} longitude={longitude}/>
    </div>
  )
}
