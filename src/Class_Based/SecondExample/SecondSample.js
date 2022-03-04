
import React from "react";
import SeasonDisplay from "./ComponentOfSecondSample/SeeasonDisplay";
import Spinner from "./ComponentOfSecondSample/Spinner";


class SecondSample extends React.Component {

state ={location:null,errorMessage:"",latitude:null} // bu constructor tanimlayip initialize etmekle ayni sey




  /*
    //en basta verileri initalize etmek icin kullaniyoruz
  constructor(props) {
      //bu zorunlu
    super(props);
    //verileri obje acip icinde tek tek initialize ediyoruz
    this.state = { location:null,errorMessage:"" };
                       
  }
*/



  //componentDidMount sayfa yuklendigi an da yapilacaklar
  //componentDidUpdate veriler güncellendiği zaman yaapılacak şeyler (setstate cagirildiginda calisir)
  //componentWillUnmount veriler kaldırıldığı ya da silindiği an da yapılacak şeyler (ornegi sonra gelicek)

  componentDidMount(){  // sayfa yuklendigi an da konum verilerini cekiyor
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we called setstate!!!!
        //setState ile guncelliyoruz, hep setState kullanmak zorundasin unutma
        this.setState({location:`https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},19z`,latitude:position.coords.latitude})  
      },
      err => this.setState({errorMessage:err.message})
    ) ;

  }
  

  componentDidUpdate(){//sayfa da herhangi bir sey degisirse bu calisicak
    console.log('updated!')
  }






//EGER BUTUN KOSSULLARA BIR SEY UYGULAMAK ISTIYORSAK BUNU HELPER FUNC ILE YAPABILIRIZ

renderContent(){

  if(this.state.location && !this.state.errorMessage){
      return  <SeasonDisplay location={this.state.location} lat={this.state.latitude}/>
     
     ;
    }
    if(!this.state.location&&this.state.errorMessage){
        return this.state.errorMessage
    }
   
    return <Spinner message="Please Accept Location Request..."/>


}

render(){
  return (
    <div style={{border:'10px solid red'}}> {this.renderContent()}</div>

  )

}


  /*
  // React says we have to define render!!
  //ZORUNLU render verileri kullanip jsx gosterdigimiz yer
render() {
    if(this.state.location && !this.state.errorMessage){
      return <div>
      <SeasonDisplay location={this.state.location} lat={this.state.latitude}/>
     
      </div>;
    }
    if(!this.state.location&&this.state.errorMessage){
        return <div>{this.state.errorMessage}</div>
    }
   
    return <Spinner message="Please Accept Location Request..."/>

    
 
}*/
}




/*  Bu func based hooklarla classin yaptiklarini yapabiliriz yukardaki ise class based
const SecondSample=()=> {
    var x;
    var error;
    window.navigator.geolocation.getCurrentPosition(
         position=>console.log(position),
         err=>error=err

     )
    
  
  return (
    <div className="ui container">
    
     

    </div>
    
     

  );
}

*/
export default SecondSample;



