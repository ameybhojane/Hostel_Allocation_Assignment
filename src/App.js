import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFemale, faMale ,faTimes} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
// import { floor } from "lodash";
// import { white } from "jest-matcher-utils/node_modules/chalk";
// import { innerText } from "domutils";


function App() {
  const [gender, setGender] = useState("");
  console.log(gender);
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Page1 setGender={setGender} gender={gender} />
          </Route>
          <Route exact path="/G">
            <Girl setGender={setGender}/>
          </Route>
          <Route exact path="/B">
            <Boy setGender={setGender} gender={gender} />
          </Route>
          <Route exact path="/floor" >
            <Floor gender={gender} />
          </Route>
          <Route>
            <h1>No match</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function Floor(props){
  const [buttonenable,enableButton]=useState(false);
  const [modis,setmodis]=useState("hidden");
  const gender=props.gender;
  console.log(modis,gender);
  return (
<>
<h1>Choose a Floor {gender}</h1>
<form>
<select name="floor" id="floor">
  <option value="1floor" >1st Floor</option>
  <option value="2floor">2nd Floor</option>
  <option value="4floor">3rd Floor</option>
  <option value="4floor">4th Floor</option>
  <option value="5floor">5th Floor</option>
</select>
</form>
<div className="container1">
<table className="tabesh">
  <tr>
  <td className="room" onClick={(ev)=>{enableButton(true);console.log(ev.target.innerText);if(!buttonenable)ev.target.className="junuon"}}>1</td>
  <td className="room" onClick={(ev)=>{enableButton(true);if(!buttonenable)ev.target.className="junuon"}}>2</td>
  <td className="room" onClick={(ev)=>{enableButton(true);if(!buttonenable)ev.target.className="junuon"}}>3</td>
  <td className="room" onClick={(ev)=>{enableButton(true);if(!buttonenable)ev.target.className="junuon"}}>4</td>
  </tr>
  <tr>
  <td className="room" onClick={(ev)=>{enableButton(true);if(!buttonenable)ev.target.className="junuon"}}>5</td>
  <td className="roomer" ></td>
  <td className="roomer"></td>
  <td className="room" onClick={(ev)=>{enableButton(true);if(!buttonenable)ev.target.className="junuon"}}>6</td>
  </tr>
  <tr>
  <td className="room" onClick={(ev)=>{enableButton(true);if(!buttonenable)ev.target.className="junuon"}}>7</td>
  <td className="room" onClick={(ev)=>{enableButton(true);if(!buttonenable)ev.target.className="junuon"}}>8</td>
  <td className="room" onClick={(ev)=>{enableButton(true);if(!buttonenable)ev.target.className="junuon"}}>9</td>
  <td className="room" onClick={(ev)=>{enableButton(true);if(!buttonenable)ev.target.className="junuon"}}>10</td>
  </tr>
</table>
  </div>
  { buttonenable? ( <button className="primarybtn" onClick={()=>{setmodis("visible")}}>Book now</button>) : (null)}

  <div className="modalpop" style={{visibility:`${modis}`}}>
  <FontAwesomeIcon icon={faTimes} className={"crossicon"} size="2x" style={{float:"left"}} onClick={()=>{setmodis("hidden")}}/>
<h1>Success</h1>
    <h3>Your room has been booked successfully</h3>
    <p>Details are as follows {gender}</p>
  </div>
</>
  )
  
}


function Girl(props) {
  const { setGender } = props;
  return (
    <>
      <h1>Choose A Hostel</h1>
      <div className="container">
        <table>
          <tr>
            <a href="/floor">
              <td  onClick={() => {
                setGender("G1");
              }}>G1</td>
            </a>
            <a href="/floor">
              <td  onClick={() => {
                setGender("G1");
              }}>G2</td>
            </a>
            <a href="/floor">
              <td onClick={() => {
                setGender("G1");
              }}>G3</td>
            </a>
          </tr>
          <tr>
            <a href="/floor">
              <td onClick={() => {
                setGender("G1");
              }}>G4</td>
            </a>
            <a href="/floor">
              <td onClick={() => {
                setGender("G1");
              }}>G5</td>
            </a>
            <a href="/floor">
              <td onClick={() => {
                setGender("G1");
              }}>G6</td>
            </a>
          </tr>
        </table>
      </div>
    </>
  );
}

function Boy(props) {
  // const { gender } = props;
  return (
    <>
      <h1>Choose A Hostel</h1>
      <div className="container">
        <table>
          <tr>
            <a href="/floor">
              <td>B1</td>
            </a>
            <a href="/floor">
              <td>B2</td>
            </a>
            <a href="/floor">
              <td>B3</td>
            </a>
          </tr>
          <tr>
            <a href="/floor">
              <td>B4</td>
            </a>
            <a href="/floor">
              <td>B5</td>
            </a>
            <a href="/floor">
              <td>B6</td>
            </a>
          </tr>
        </table>
      </div>
    </>
  );
}

function Page1(props) {
  
  const {setGender}=props;

  return (
    <>
      <h1 style={{ width: "100vw" }}>Choose your Hostel</h1>
      <div
        style={{ width: "100vw", display: "flex", justifyContent: "center" }}
      >
        <div className="container">
          <a href={`/G`}>
            <div
              className="conatiner-item"
              onClick={() => {
                setGender("G");
              }}
              style={{ backgroundColor: "lightpink" }}
            >
              <FontAwesomeIcon icon={faFemale} size="6x" />
              <h2>Girls Hostel</h2>
            </div>
          </a>
          <a href={`/B`}>
            <div
              className="conatiner-item"
              onClick={() => {
                setGender("B");
              }}
              style={{ backgroundColor: "lightblue" }}
            >
              <FontAwesomeIcon icon={faMale} size="6x" />
              <h2>Boys Hostel</h2>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;

// Import FirebaseAuth and firebase.
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// //import firebase from 'firebase';
// // Firebase App (the core Firebase SDK) is always required and must be listed first
// import firebase from "firebase/app";
// // If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// // import * as firebase from "firebase/app"

// // If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// // Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";

// // Configure Firebase ;
// const firebaseConfig  = {
//   apiKey: "AIzaSyCie95HZ-7XhVGvtVmdaP6qA8ZwqMYrlkQ",
//   authDomain: "hostel-as.firebaseapp.com",
//   projectId: "hostel-as",
//   storageBucket: "hostel-as.appspot.com",
//   messagingSenderId: "91700502017",
//   appId: "1:91700502017:web:f1469a8f1db3c40184aa00",
//   measurementId: "G-G2GKVCLKY7"
// };
// firebase.initializeApp(firebaseConfig);

// // Configure FirebaseUI.
// const uiConfig = {
//   // Popup signin flow rather than redirect flow.
//   signInFlow: 'popup',
//   // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//   signInSuccessUrl: '/signedIn',
//   // We will display Google and Facebook as auth providers.
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//   ],
// };

// function SignInScreen() {
//   return (
//     <div>
//       <h1>My App</h1>
//       <p>Please sign-in:</p>
//       <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
//     </div>
//   );
// }

//export default SignInScreen
