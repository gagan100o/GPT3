import React, {useState} from "react";
import{
  NavLink
} from "react-router-dom";

export default function Navbar(props) {
  
  return (
    <>
    <nav className={`navbar navbar-expand-lg shadow-lg  fixed-top  text-bg-${props.mode===true?'primary':'dark'} `}  >
  <div className="container-fluid" >
    <a className="navbar-brand mx-5" style={{ color:'white' , fontWeight:600, fontSize:40+'px', margin:-10+'px',padding:0}} href="#">P.s</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  justify-content-center" id="navbarNav">
      <ul className="navbar-nav  "  >
        <li className="nav-item" >
          <NavLink className="nav-link   mx-5"  aria-current="page" to="/" style={{ color:'white' , fontWeight:600}}>About</NavLink>
        </li>
        <li className="nav-item"  >
          <NavLink className="nav-link mx-5 " style={{ color:'white' , fontWeight:600}} to="/work" >Work</NavLink>
        </li>
        <li className="nav-item" >
          <NavLink className="nav-link mx-5"  style={{ color:'white' , fontWeight:600}} to="/Contect">Contect</NavLink>
        </li>
      </ul>
    </div>
    <div className="form-check form-switch mx-5">
  <label className="form-check-label" htmlFor="mode"><i onClick={props.clicked} className={`bi bi-${props.mode===true?'moon-stars':'brightness-high'} -fill`}></i></label>
</div>
  </div>
</nav>




    </>
  )
}
