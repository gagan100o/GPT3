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
      
    <div className="d-flex align-items-start">
  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <Link to="P1"  className="nav-link"  >Home</Link>
    <Link to="Work1" className="nav-link"   >Profile</Link>
    
  </div></div>
   </div>
     
{/* <Link to="P1" className="nav-link "  >Home</Link>
    <Link to="Work1" className="nav-link"   >Proefdvfile</Link>*/}
<Outlet></Outlet> 
      </section> </>
    )
}
