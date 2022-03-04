import React from "react";
//rcc shortway to build base
class MainPage extends React.Component{
    
    state={term:'Enter Text...'}
    alertFunc=(event)=>{
        event.preventDefault() /*preventDefault():submit ettigimizde sayfayi yenilemeyi onluyor, 
            ya da formun sayfa yenilirken falan otomatik submit etmesini onluyor*/
          /*PARENT DAN CHILD A PROP YOLLAYABILIRSIN FAKAT CHILD DAN PARENT A YOLLAYAMAZSIN
          BUNU COZMEK ICIN FONKSIYON KULLANICAZ..
          PARENT DA (APP'DA) BI PROP BELIRLIYCEZ VE BU PARENT DA TANIMLI BI FONKSIYON OLUCAK
          DAHA SONRA BURDA DA ONSUBMIT LE VEYA BELIRLEDIGIMIZ BIR SEKILDE THIS.PROPS.BLALBLA() DIYE CAGIRICAZ
          
          !!==NOT!!!== CLASS BASED PROP ILE FUNC BASED PROP ARASINDA KI TEK FARK CLASS DA BASINA THIS KOYMAMIZ GEREKIYOR*/
          this.props.onSubmit(this.state.term)
        }


    render(){
        return (
            <div className="ui container">
            <div className="ui segment" style={{marginTop:"10px"}}>
           
            {/*PROPS ICINDE CALLBACK FONKSIYON TANIMLARSAN DAHA SONRA CAGIRMAK ICIN, VE BU CALLBACK FUNC
            ICINDE STATE'E THIS.STATE.BLABLA SEKLINDE ULASMAK ISTERSEN HATA ALIRSIN. BUNUN ONUNE GECMEK
        ICIN CALLBACK FUNC LARI ARROW FUNC OLARAK TANIMLA HATA COZULUR. HATA ALMAMAK GARANTI OLSUN DIYE
    EN BASTAN ARROW TANIMLA KAFAN RAAD OLSUN...*/}
            <form className="ui form" onSubmit={this.alertFunc}>{/*render da func cagirmak icin this kullanmayi unutma!!!*/}
            <div className="field">
              <label>Image Search</label>
              {/*onChange prop una tanimladigimiz fonksiyonu yazarken parantez koyarsak uygulama basladigi an da bu
            fonksiyonu cagirir, fakat eger parantez koymadan referans edersek sadece degistiginde yani guncellendiginde
        cagrilir   (YANI CALLBACK FONKSIYONLARINA PARANTEZ KOYMUYORUZ CUNKU BUNLAR BELLI ZAMAN
        VE KOSULLARDAN CAGRILAN FONKSIYONLAR)*/}
    {/*onChange den baska onSubmit ve onClick de var*/}
              <input type="text" value={this.state.term} onClick={()=>{if(this.state.term==='Enter Text...')this.setState({term:""}) }} 
              onChange={(e)=>this.setState({term:e.target.value})} />
            </div>
           
            </form>
            </div>
            
            </div>
        )
    }


}
export default MainPage;