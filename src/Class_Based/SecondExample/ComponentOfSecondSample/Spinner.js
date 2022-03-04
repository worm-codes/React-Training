import React from "react";
//rcc shortway to build base
const Spinner=props=>{
   return( 
  <div class="ui active inverted dimmer">
    <div class="ui big text loader">{props.message}</div>
  </div>
  )
}

//eger prop uzerinden mesaj yolluyorsak ve mesaj gelmezse onun yerine ne cikicak belirliyoruz
Spinner.defaultProps={
message:'Loading...'
}



export default Spinner;