import React,{Fragment,useState} from 'react'
let active=''


 const Accordion=({items})=> {
   const [open,setOpen]=useState(false)
   const [activeIndex,setActiveIndex]=useState(-1);
   const onTitleClick=(index)=>{
     if(index!==activeIndex){
     setActiveIndex(index);
     setOpen(true)
     }
     else{
       setOpen(!open)
     }
   }
   


   const ListItems=items.map((item,index)=>{ 

     active= activeIndex===index && open?'active':'';

    
   


 
     
     return (
       <Fragment key={item.title} >
                                     {/*arrow func olmak zorunda yoksa, sayfa render oldugu an da func cagrilir */}
       <div className={`title ${active}`} onClick={()=>onTitleClick(index)}>
       <i className="dropdown icon"></i>
       {item.title}
       
       </div>
       <div className={`content ${active}`}>
       <p>{item.content}</p>
       </div>
       
       </Fragment>
    
  )

   })

   
   return (
     <div className="ui styled accordion">
     {ListItems}
     {activeIndex}
     </div>
   )
   
   }

export default Accordion;
