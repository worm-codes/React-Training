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
     

        <Routes basename={process.env.PUBLIC_URL}>
  {/*ROUTELARI BOYLE ADIM ADIM EKLIYORUZ BURASI SADECE YONLENDIRIYOR*/}
  
          <Route path="/React-Training" element={<Home/>}/>
          <Route path="/React-Training/firstSample" element={<FirstSample/>}/>
          <Route path="/React-Training/secondSample" element={<SecondSample/>}/>
          <Route path="/React-Training/thirdSample" element={<ThirdApp/>}/>
          <Route path="/React-Training/fourthSample" element={<FourthSample/>}/>
          <Route path="/React-Training/function1" element={<UnderStandingHooks/>}/>

         
        </Routes>
    
    </Router>
    </div>
  
    
  );
}

export default App;



