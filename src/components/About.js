import React, {useState} from "react";

export default function About(props) {
  return (
<>



 <div id="About" className='py-2 '>
  
<div  className='mt-0 mb-0' style={{ height: 100+'vh',
    width: 100+'%',
    backgroundColor: `${props.mode===true?'white':'black'}`,
    backgroundImage: `${props.mode===true? 'linear-gradient(62deg, #3a3d40 0%, #a0aedb 100%)':'linear-gradient(62deg, #3a3d40 0%, #181719 100%)'}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}}>
  
    <h1 style={{color:props.mode===true?'black':'white'}}>
    Hey I Am Parwinder Singh
    </h1>
    <p style={{fontFamily:" 'Raleway', sans-serif",
    marginTop: 20+"px",
    fontSize: 2.5+'rem',
    textAlign: 'center',
    color: '#be3144'}}><i>
    a web developer
    </i>
    </p>
</div> 

</div> 
</>
    )
}
