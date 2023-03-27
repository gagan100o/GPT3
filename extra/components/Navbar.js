import React from 'react'

export default function Navbar(props) {
  const white={
borderColor:"white"}
const white1={
  color:"white"}
  return (
    <>
   <nav className={`navbar text-bg-${props.mode===true?'primary':'dark'} text-bg-${props.mode===true?'primary':'dark'} fixed-top`}>
  <div className="container-fluid ">
    <a className="navbar-brand" href="./components/Container"  style={white1}  >{props.title}</a>

    
    <button className={`navbar-toggler `} style={white} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className={`bi bi-list`} style={white1} ></span>
    </button>
    <div style={white1} className={`offcanvas offcanvas-end text-bg-${props.mode===true?'primary':'dark'}`} tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body"  style={white1} >
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3"  >
          <li className="nav-item" >
            <a className="nav-link active"  style={white1}  aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  style={white1}  href="#">About</a>
          </li>
          <li className="nav-item dropdown">
            <a  style={white1}  className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className={`dropdown-menu dropdown-menu-${props.mode===true?'primary':'dark'}`}>
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>

        <div className="form-check form-switch my-5">
  <input className={`form-check-input text-bg-${props.mode===true?'dark':'primary'}`} type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.clicked}/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable {`${props.mode===true?'Dark':'Light'}`} mode</label>
</div>        
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
