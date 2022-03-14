import React,{useState,useEffect,useRef} from 'react'


const Dropwdown=({options,selected,onSelectedChange})=> {
    const [openState,setOpenState]=useState(false);
    const ref=useRef();

    const onBodyClick=(event)=>{
      if(ref.current){
       if(ref.current.contains(event.target)){
         return;
       }
       console.log('event')
       setOpenState(false)

    } }


    useEffect(()=>{
    document.body.addEventListener('click',onBodyClick ,{capture:true})

    return ()=>{/*bu fonksiyon Dropdown componenti yok oldugu zaman gizlendigi
    veya kaldirildigi zaman calisir, hata olusmamasi icin Dropdown silinmeden once veya
    gizlenmeden once eventListeneri kaldiriyoruz . Buna CleanUp func deniyor*/
      document.body.removeEventListener('click',onBodyClick)
    }
    } ,[])


    const renderedItems=options.map((option)=>{
        if(option.label===selected.label)//secilen eleman dropdown da secenek olarak cikmasin diye yazdik
        return null;

        else{
        return (
            <div key={option.value} 
            onClick={()=>onSelectedChange(option)}
            className='item'>
            {option.label}

            </div>
        )
        }


    })
  return (
    <div ref={ref} className="ui form">
    <div className="field">
    <label className='label'>Select</label>
    <div onClick={()=>setOpenState(!openState)} className={`ui selection dropdown ${openState ?'visible active':''}`}>
    <i className="dropwdown icon"></i>
    <div className="text">{selected.label}</div>
    
    <div className={`menu ${openState?'visible transition':''}`}>
    {renderedItems}
    </div>
    
    </div>
    
    </div>
    </div>
  )
}

export default Dropwdown