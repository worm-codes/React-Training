import React from "react";

const ComponentDetails=(props)=>{
    
    return(
    <div className='comment'>
     <a href='/' className='avatar'>
     <img alt='avatar' src={props.imageForAvatar}/>
     </a>

     <div className='content'>
     <a href='/' className='author'>
       {props.author}
       </a>
     </div>

     <div className='metadata'>
     <span className='date'>{props.dateTime}</span>
     </div>

     <div className='text'>
     {props.content}
     </div>
     
     </div>
    )
}
export default ComponentDetails;


