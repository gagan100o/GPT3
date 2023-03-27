import Navbar from "./components/Navbar";
import About from "./components/About";
import Container from "./components/Container";
import React, {useState} from "react";
import Alert from "./components/Alert";
 
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
      // document.getElementById("er").style.backgroundColor="white";
      document.body.style.backgroundColor="#f8f9fa";
      showAlert("Light mode enable","success");
       
      
     }
     else{
      colour(false);
      // document.getElementById("er").style.backgroundColor="black";
      document.body.style.backgroundColor="#6c757d";
      showAlert("Dark mode enable","success");
        
     }
   }
   setTimeout(()=>{
    setAlert(null);
   },1500)
   
  return (
   <>
   <Navbar title="Gagan" mode={dm}  clicked={dmode}/>
   <Alert alert={alert}/>
   <Container mode={dm} ></Container>
   {props.lert}
    {/* <About></About> */}
   </>
  );
}

export default App;
