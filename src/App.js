import React from "react";
import FirstSample from "./FirstSample";
import SecondSample from "./SecondSample";
import FourthSample from './FourthSample'
import UnderStandingHooks from './Function_Based/Understanding_Hooks_App/App'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import ThirdApp from "./ThirdExample/ThirdApp";
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



