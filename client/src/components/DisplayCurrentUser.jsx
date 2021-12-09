export default function DisplayCurrentUser(props) {

  return (
    <div>
        <h2>{props.Username}</h2>
        <h2>{props.Longitude}</h2>
        <h2>{props.Latitude}</h2>
        <h2>{props.Altitude}</h2>
        <h2>{props.ClosestSatellite}</h2>
    </div>
    )
}