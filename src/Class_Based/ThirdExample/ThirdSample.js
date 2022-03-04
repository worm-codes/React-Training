import React from 'react';
import ThirdSample from '../ThirdSample';
//import axios from 'axios';
import unsplash from './api/unsplash';
import Image_List from './Image_List';
//rcc shortway to build base

class ThirdApp extends React.Component{
     state={image_link:''}
    
    
      onSearchSubmit=async(term)=>{
          const response= await unsplash.get('/search/photos',
       
        {
            params:{query:term}
        })

         this.setState({image_link:response.data.results})
         


          /* axios icin bu birinci yol, ikinci yol ise daha temiz hale getirmek
          ayri bir api klasoru acip sorguyu orda yapip veriyi burda cekmek 2. yontem yukardaki oluyor



        const response= await axios.get('https://api.unsplash.com/search/photos',
        //2. kisim sorguyu nasil yapicagimizi anlattigimiz kisim
        {
            //bazi headerlar burada yazilir Authentication gibi 
            headers:{
                Authorization: 'Client-ID G_I33CKx5pLF6rRLeEofN1lvLqwSGrhvw-xXfW0X_PI'

            },
            //ne tur sorgu yapacagin
            params:{query:term}
        })*/




        console.log(response.data.results[0].urls.regular)
       
       

    }

    render(){
        return(
            <div className='ui container'>
            <ThirdSample onSubmit={this.onSearchSubmit} />
            
            <Image_List image_link={this.state.image_link} />
            </div>
            
            
        )
    }
}

export default ThirdApp;



