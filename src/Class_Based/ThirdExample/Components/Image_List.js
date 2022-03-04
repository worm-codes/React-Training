import React, { Component } from 'react';
import '../ImageList.css'
import ImageCard from './ImageCard';

class Image_List extends Component {

    render() {
      
        if(this.props.image_link){
            //object desructing yapabiliriz parametre kisminda, SUSLU PARANTEZ ETRAFINA NORMAL PARANTEZ ATMAYI UNUTMA
        const images=this.props.image_link.map((image)=>{
            /*liste elemani basarken key olmak zorunda, bunun sebebi 1 2 ve 3 keylerine sahip elemanlar
            ekranda basilmis vaziyette dururken 4. yu eklersem diger 3 nu render etmez sadece 4. yu ekler onu render eder
            performans anlaminda buyuk kazanc. KEY I HER ZAMAN ROOT A EKLERSIN SU AN SADECE
            IMG DONUYORUZ AMA DIV ICINDE IMG DONSEYDIK DIV E KOYMAK ZORUNDAYDIK KEY I*/

                         
          return <ImageCard key={image.id} image={image}/>
                
        })
    
      
            return(
                <div className='image-list'>{images} </div>
            )
        }
        else{
            return(
                <div>No results..</div>
            )
        }
        
    }
}

export default Image_List;