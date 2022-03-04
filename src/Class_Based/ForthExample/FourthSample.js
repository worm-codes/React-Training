import React, { Component } from 'react'
import SearchBar from './Components/SearchBar'
import youtube from './api/youtube'

export default class FourthSample extends Component {
    state={videos:''}
    onSubmitSearch=async (term)=>{
       
         youtube.get('/search',{
            params:{q:term}
        })
       //BURDA BIRAAKTIM CUNKU VIDEOLARI BURDAN ALICAM API DA SORUN YASADIM AMA MANTIK BOYLE BUNLARI ALIP ATICAZ 
       //EXAMPLE 3 ILE AYNI
    }
  render() {
    return (
        <div className="ui container">
        <SearchBar onSubmitSearch={this.onSubmitSearch}/>
        
        </div>
      
    )
  }
}
