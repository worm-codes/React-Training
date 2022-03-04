import React, { Component } from 'react'

export default class ImageCard extends Component {

    constructor(props){
        super(props)
        this.state={spans:0}
        this.imageRef=React.createRef();

    }
    async componentDidMount(){
       /*  console.log(this.imageRef.current.clientHight);  bu sekilde yapinca resim daha yuklenmeden resim
       verisine erismeye calisiyoruz ama bu mumkun degil bu yuzden eventListener kullanmamiz lazim*/
       this.imageRef.current.addEventListener('load',this.setSpans)//load oldugu anda setspans calistir demek
       

    }
    setSpans=()=>{
        const height=this.imageRef.current.clientHeight;
        const spans=Math.ceil(height/10)
        console.log(spans)
        this.setState({spans})//variable ile state ismi ayni diye birini yazsak yeterli
    }
  render() {
    return (
      <div style={{gridRowEnd:`span ${this.state.spans}`}}> {/*boylece statik bir span degeri olusturduk,
    her bi fotografi alip yukleyip heightini elde edip heightina gore span degeri belirleyip atiyoruz */}
      <img  ref={this.imageRef} src={this.props.image.urls.regular} alt={this.props.image.description} />
      
      </div>
    )
  }
}
