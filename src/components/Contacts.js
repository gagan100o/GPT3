import React, { useState } from 'react'

export default function contacts(props) {
    const a_style={color: 'white',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    fontSize: 25+'px',
    paddingLeft: 50+'px',
    paddingRight: 10+'px'}
  return (
    <>
    <div id='Contect' style={{height:100+'vh',width:100+'%',display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop:2+"rem",
    background: '#303841',
    backgroundImage: `${props.mode===true? 'linear-gradient(62deg, #3a3d40 0%, #a0aedb 100%)':'linear-gradient(62deg, #3a3d40 0%, #181719 100%)'}`,
    position:'relative',
    zIndex:'0 !important'}}>

<h1 style={{fontFamily:" 'Raleway', sans-serif",
    fontWeight: 700,
    fontSize: 60+'px',
    textAlign: 'center',
    color: 'white',
    opacity: 90+"%"}}>Let's work together...</h1>
    <div className="if" >
        <a style={a_style} href="https://facebook.com/freecodecamp"><i className="bi bi-facebook"></i> facebook</a>
        <a style={a_style} href="https://github.com/freecodecamp"><i className="bi bi-github"></i> github</a>
        <a style={a_style} href="https://twitter.com/freecodecamp"><i className="bi bi-twitter"></i>twitter</a>
        <a style={a_style} href="mail:singhparwinder0123@gmail.com"><i className="bi bi-envelope-at"></i> send a mail</a>
        <a style={a_style} href="tel:9548101477"><i className="bi bi-phone"></i> contect me</a>
    </div>
      </div>
    </>
  )
}
