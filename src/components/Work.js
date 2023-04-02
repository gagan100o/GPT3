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
    
    <section id='Work' style={{height:100+"vh",width:100+"%", paddingTop:9+"vh",display:'flex',flexDirection:'row', position:'fixed'}}>
     
    <div className=" " style={{maxWidth:20+'vw',width:20+'vw',minWidth:20+'vw',height:100+'vh',display:'flex',justifyContent:'center',borderRight:'1.5px dashed black',}}>
  
  <div className="d-flex align-items-start mt-5">
  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <Link to="Work1" className="nav-link"   >
    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"> TextUtils</button></Link>
    <button className="nav-link mt-5" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
    <button className="nav-link mt-5" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>Disabled</button>
    <button className="nav-link mt-5" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
    <button className="nav-link mt-5" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
  </div>
   </div></div>

<Outlet></Outlet> 
      </section> </>
    )
}
