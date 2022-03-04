import  React  from "react";
import './SecondExample.css';

const getSeason=(lat,month)=>{
    if(month>4 && month <9){
        return lat>0 ? 'summer':'winter'; //lat 0 dan buyukse winter degilse summer donecek
    }
    else{
        return lat>0 ? 'winter':'summer';
    }


}
const seasonConfig={
    summer:{
        text:"Let's hit the Beach !!!",
        iconName:'sun'
    },
    winter:{
        text:'Burr It is cold..',
        iconName:'snowflake'
    }
}



const SeasonDisplay = props=>{
 const Season=getSeason(props.lat,new Date().getMonth()+1); 

 // normalde yukardan donen season a gore burda tanimlama yapabilirdik bunun yerine
 //daha duzgun ve mantikli bir sekilde obje tanimlayip sonra object destructing yapicaz
const {text,iconName}=seasonConfig[Season]

return (
    <div className={`season-display ${Season}`}>
    <i className={`icon-left massive ${iconName} icon`}></i>
    <div /*className="content-center"*/>
    <h1>{text}</h1>
     <a style={{padding:"35%"}} target="_blank" href={props.location}>Location </a>
    </div>
    
     

    <i className={`icon-right massive ${iconName} icon`}></i>
    
    </div>

);

};


export default SeasonDisplay;