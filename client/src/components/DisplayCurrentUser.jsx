export default function DisplayCurrentUser(props) {

  return (
    <div>
      <ul>
        <li>{props.Username}</li>
        <li>{props.Longitude}</li>
        <li>{props.Latitude}</li>
        <li>{props.Altitude}</li>
        <li>{props.ClosestSatellite}</li>
      </ul>
    </div>
    )
}