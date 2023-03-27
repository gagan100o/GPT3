import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Work from "./components/Work.js";
import Contacts from "./components/Contacts.js";
import React, {useState} from "react";
import Alert from "./components/Alert.js";
import P1 from "./components/P1.js";



import Work1 from './components/Work1.js'
import {
//    BrowserRouter as Router,
  Routes,
  Route,
//   Link
} from "react-router-dom";


function App(props) {
  const[dm,colour]=useState(false);
  const[alert,setAlert]=useState(null);
  
  const showAlert=(msg,ty)=>{
      setAlert({
        message:msg,
        type:ty
  })
  }

   const dmode=()=>{
     if(dm===false){
      colour(true);
      document.body.style.backgroundColor="#f8f9fa";
      showAlert("Light mode enable","success");
       
      
     }
     else{
      colour(false);
      document.body.style.backgroundColor="#6c757d";
      showAlert("Dark mode enable","success");
        
     }
   }
   setTimeout(()=>{
    setAlert(null);
   },2000)

   

 return (
   <>
   <Navbar mode={dm} clicked={dmode}></Navbar>
   {/* <About mode={dm}></About>
   <Work></Work>
   <Alert alert={alert}></Alert>
     */}
   <Routes>
    <Route path="/" element={<About></About>}></Route>
    <Route  path="/work" element={ <Work></Work>}>
       <Route path='Work1' element={<Work1></Work1>}></Route>
       <Route path='P1' element={<P1></P1>}></Route>
       
    </Route>
    <Route path="/contect" element={<Contacts></Contacts>}></Route>
   </Routes>
   {/* <Contacts mode={dm}></Contacts> */}
   </>
  );
}

export default App;
