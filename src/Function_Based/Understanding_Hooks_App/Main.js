import React,{useState} from 'react'
import Accordion from './Components/Accordion'
import Search from './Components/Search'
import Dropdown from './Components/Dropwdown'
import Translate from './Components/Translate'


let items=[
  {title:'Youtube',content:'Video Page'},
  {title:'Instagram', content:'Social Media App that full of photos'},
  {title:'Facebook', content:'Dying app...'},
  {title:'Twitch', content:'Live Streaming Platform'}
]
let options=[
  {label:'Red Color',value:'red'},
   {label:'Blue Color',value:'blue'},
    {label:'Grenn Color',value:'green'},
]



const Main=() =>{
  const [selected,setSelected]=useState(options[0])
  const [showDropDown,setShowDropdown]=useState(false)
  const [showSearchBar,setSearchBar]=useState(false)
  const [showAccordion,setAccordion]=useState(false)
  const [showTranslate,setTranslate]=useState(true)

  return (
    <div>
    <button onClick={()=> setSearchBar(!showSearchBar)}>Toggle SearchBar</button>
    {showSearchBar?
    <Search/>
    : null
    }
    <button onClick={()=> setShowDropdown(!showDropDown)}>Toggle Dropdown</button>
    { showDropDown?
    <Dropdown selected={selected} onSelectedChange={setSelected} options={options}/>
    :null
    }
    <button onClick={()=> setAccordion(!showAccordion)}>Toggle Accordion</button>
    {showAccordion?
    <Accordion items={items} />
    :null
    }
    
     <button onClick={()=> setTranslate(!showTranslate)}>Toggle Translate</button>
    {showTranslate?
    <Translate />
    :null
    }
    </div>
  )
}
export default Main;
