import React,{useState} from 'react'
import Dropwdown from './Dropwdown'
import Convert from "./Convert";

const options=[
    {label:'English',
     value:'en'},
     {label:'Turkish',
     value:'tr'},
     {label:'Arabic',
     value:'ar'},
     {label:'Hindi',
     value:'hr'},
     {label:'Germany',
     value:'de'}
   
]

const Translate=()=> {
    const [language,setLanguage]=useState(options[0])
    const [text,setText]=useState('')
  return (
    <div className='ui form' style={{marginTop:'20px'}}>
    <div className="field">
   
    <input className='input' placeholder='Enter Text to Translate'  value={text} onChange={(e)=>setText(e.target.value)}/>
    </div>
     <div className="field">
    <Dropwdown selected={language} onSelectedChange={setLanguage} options={options}/>
    </div>
    <h3>OUTPUT</h3>
    <Convert text={text} language={language}/>
    
    
    </div>
  )
}

export default Translate