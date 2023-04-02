// import React from 'react'
import React, { useState } from 'react';
import { useSpeechSynthesis as speech } from 'react-speech-kit';

export default function Container(props) {

const [count, text] = useState(``);
const uppercase=()=>{
 let newText=count.toLocaleUpperCase();
 text(newText);
 
}
const handelOnChange=(event)=>{
 text(event.target.value);
}
const lowercase=()=>{
    let newText=count.toLocaleLowerCase();
    text(newText);
   }
   const clearcase=()=>{
    let newText="";
    text(newText);
   }
   
const{speak}=speech();


   const listen=()=>{
 speak({text:count})
   }
  
  return (
    <>
      <div className="container my-5 py-5" >
         <div className="mb-3">
          <h3>
          <label htmlFor="myBox" className={`form-label text-bg-${props.mode===true?'light':'secondary'} `}>Enter your text:</label>
          </h3>
          <textarea className={`form-control text-bg-${props.mode===true?'light':'secondary'}`} onChange={handelOnChange} id="myBox" rows="10" value={count}></textarea>
            </div>
            <p className={` text-bg-${props.mode===true?'light':'secondary'}`}> words:{count.split(" ").length}  characters:{count.length} </p>

            
    
            <button type="button"  className={`btn btn-outline-${props.mode===true?'danger':'light'} mx-2`} onClick={uppercase}>UpperCase  </button>
            <button type="button"   className={`btn btn-outline-${props.mode===true?'success':'light'} mx-2`} onClick={lowercase}>LowerCase</button>
            <button type="button"  className={`btn btn-outline-${props.mode===true?'dark':'light'} mx-2`} onClick={clearcase}>Clear</button>
            <button type="button"  className={`btn btn-outline-${props.mode===true?'dark':'success'} mx-2`} onClick={listen}>Listen</button>
            




















        </div>
    </>
)
}
