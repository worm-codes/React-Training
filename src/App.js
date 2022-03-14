import React from "react";
import FirstSample from "./Class_Based/FirstExample/FirstSample";
import SecondSample from "./Class_Based/SecondExample/SecondSample";
import FourthSample from "./Class_Based/ForthExample/FourthSample";
import UnderStandingHooks from './Function_Based/Understanding_Hooks_App/Main'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import ThirdApp from './Class_Based/ThirdExample/ThirdSample'
//COMPONENT ADLARI MUTLAKA BUYUK HARFLE BASLAMALI  ##########################################


function App() {
  
  return (
    <div>
   
    <Router>
     

        <Routes>
  {/*ROUTELARI BOYLE ADIM ADIM EKLIYORUZ BURASI SADECE YONLENDIRIYOR*/}
  
          <Route path="/" element={<Home/>}/>
          <Route path="/firstSample" element={<FirstSample/>}/>
          <Route path="/secondSample" element={<SecondSample/>}/>
          <Route path="/thirdSample" element={<ThirdApp/>}/>
          <Route path="/fourthSample" element={<FourthSample/>}/>
          <Route path="/function1" element={<UnderStandingHooks/>}/>

         
        </Routes>
    
    </Router>
    </div>
  
    
  );
}

export default App;



