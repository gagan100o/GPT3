import React from 'react'
import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
 Link, Outlet, Route, Routes
} from "react-router-dom";
import Work1 from "./Work1"
  

export default function Work() {
  
  return (
    <>
    
    <section id='Work' style={{height:100+"vh",width:100+"%", marginBottom:-5+"vh", marginTop:-1.1+"vh" , paddingTop:9+"vh",display:'flex',flexDirection:'row'}}>
     
    <div className="mt-2 ms-1 " style={{maxWidth:10+'vw',width:'auto',height:100+'vh',display:'flex',justifyContent:'center'}}>
      
    {/* <div className="d-flex align-items-start">
  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <Link to="P1"  className="nav-link"  >Home</Link>
    <Link to="Work1" className="nav-link"   >Profile</Link>
    
  </div>
  </div> */}
  <div class="d-flex align-items-start">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">  <Link to="Work1" className="nav-link"   >Text utils</Link></button>
    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
    <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>Disabled</button>
    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
  </div>
   </div></div>
     
{/* <Link to="P1" className="nav-link "  >Home</Link>
    <Link to="Work1" className="nav-link"   >Proefdvfile</Link>*/}
<Outlet></Outlet> 
      </section> </>
    )
}
