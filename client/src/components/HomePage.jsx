// import { Link, Routes, Route } from 'react-router-dom'
// import './HomePageStyling.css'


// export default function HomePage() {
  
//   return (
//     <div>
//     <div className='main-container'>
//     <div id="UserDataContainer" >
//       <div id="DataFormMessage">
//         <div id="DataFormWelcome">
//           Welcome to the Starlink Satellite Tracker
//         </div>
//         <div id="about">
//           This Webapp will grab your current location, and show you the closest
//           Starlink satellite to your location currently.
//         </div>
//         <div id="prompt">
//           Enter your new Username below and click on the satellite to find the
//           nearest Starlink Satellite
//         </div>
//       </div>
//       <form onSubmit={handleSubmit} id="DataFormContainer">
//         <input
//           id="UserDataForm"
//           placeholder="Enter your new Username"
//           type="text"
//           value={Username}
//           name="Username"
//           onChange={(e) => setUserName(e.target.value)}
//         />
//         <button type="submit" id="submitButton">
//           Submit
//         </button>
//         <div id="dataButtonContainer">
//           <Link to='./'>
//             <img
//               id="userDataButton"
//               src="https://www.sciencenews.org/wp-content/uploads/2020/03/032820_CC_satellites_inline-4_680-626x450.png"
//             />
//           </Link>
//         </div>
//       </form>
//       </div>
//       </div>
//       </div>
//   )
// }