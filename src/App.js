import React from "react";
import FirstSample from "./FirstSample";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";

//COMPONENT ADLARI MUTLAKA BUYUK HARFLE BASLAMALI  ##########################################


function App() {
  
  return (
    <div>
   
    <Router>
     

        <Routes>
  {/*ROUTELARI BOYLE ADIM ADIM EKLIYORUZ BURASI SADECE YONLENDIRIYOR*/}
  
          <Route path="/" element={<Home/>}/>
          <Route path="/firstSample" element={<FirstSample/>}/>
          

          
          
         
        </Routes>
    
    </Router>
    </div>
  
    
  );
}

export default App;



