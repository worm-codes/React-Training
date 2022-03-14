import React,{useState,useEffect} from 'react'
import axios from 'axios';


const Search=()=> {
    const [term,setTerm]=useState('')
      const [results, setResults] = useState([]);
     
  
    
    useEffect(/*BURAYA ASYNC YAZAMAZSIN YASAK*/()=>{
        //AMA İÇİNE ASYNC FUNCTION TANIMLAYIP CALISTIRABILIRSIN
        //VEYA DISARDA TANIMLAYIP ICERDE CAGIRIRSIN
        /*VEYA (async()=>{
            await axios.blablabla
        }) ()   yaparak dummy func tanımlayıp hemen ardından çağırmış olursun*/
         const search=async()=>{
            const {data}=await axios.get('https://en.wikipedia.org/w/api.php',{
                 params:{
                     action:'query',
                     list:'search',
                     origin:'*',
                     format:'json',
                     srsearch:term
                 }
             })
             setResults(data.query.search)
            
         }
          var timeOutId;

          if(term)
          {
         //timeOut olusturunca bir ID olusur bunu iptal etmek icin bu id yi kullanabiliriz
          timeOutId=setTimeout(() => {
            //term empty string dışında birşey olunca request yap
            search()
   
         }, 700)
         };//timeout un nedeni her klavyeye bastigimizda degil durdugumuzda arasin
         if(!term){
             setResults([])
         }
         
        
         /*uygulama ilk basladiginda useeffect icindeki kodlar calisir fakat degisiklik
         yapildigi zaman once burdaki fonksyion calisir daha sonra useeffecct icindekiler calisir
         bu neden id yi kullanip timeout u cancel edicez. eger degisiklik olmazsa zaten o term aranacaktir
         bu yuzden o term ile request yapmamiz gerekir */
          return ()=>{
              clearTimeout(timeOutId)

          }
        
          /*callbackde ki virgülden sonrası;
          ((((((NOT: HEPSİ İLK SEFERDE UYGULAMA RENDER OLDUKTAN SONRA
             ÇALIŞIR UYGULAMA RENDER OLDUĞUNDA,SONRAKI ÇALIŞMALARI KOŞULA BAĞLI))))))
           -boş ise her zaman çalışır (ilk ve hepsi) (NOT:RENDER İSLEMİ BİTTİKTEN SONRA BASAR)
           -boş array var ise sadece ilk render olduğunda çalışır  (NOT:RENDER İSLEMİ BİTTİKTEN SONRA BASAR)(ilk yüklenme de) ([])
           -array içinde bir değişken varsa, o değişken değiştiği(güncellendiği) zaman çalışır ([term] gibi)(NOT:İLK SEFERDE DE ÇALIŞIR)
           ------BUNLARDAN BAŞKA BİR ŞEY OLAMAZ SADECE 3 ŞEKİL DE KULLANILIR BOŞ,BOŞ ARRAY,ARRAY İÇİ DEĞİŞKEN*/
      },[term]);
    
          
      const renderedResults=results.map((item)=>{
          const regex = /(<([^>]+)>)|(&quot;)/gi //NEW //SPANLARI html taglerini kaldırıyor
          
          const cleanSnippet = item.snippet.replace(regex, ""); //NEW 
          return(
              <div key={item.pageid} className="item">
              <div className="right floated content">
              <a className='ui blue button'
              href={`https://en.wikipedia.org?curid=${item.pageid}`}
              rel="noreferrer" //target new blank kullanirken kullanmamiz gerekiyor security issues icin
              target="_blank"
              >Go</a>
              </div>
              <div className="content">
              <div className="header">
              {item.title}
              </div>
              {cleanSnippet}
              {/*dangerouslySetInnerHTML cok tehlikeli cok guvenilir bi api olmadiktan sonra
            JS kodlari yazarak app i crash edebilirler, bu kod gelen html tagini basmamiza yariyor ama tehlikeli 
        cogunlukla kullanma,span leri yok et onun yerine */}
             {/* <span dangerouslySetInnerHTML={{__html:item.snippet}}></span>*/}
            
              </div>
              </div>
          )

      })
    
     
      
 
      
  return (
      
    <div>
    <div className="ui form">
    <div className="field">
    <input placeholder='Enter Search Term'
    value={term}
    onChange={(event)=>setTerm(event.target.value)}
    className="input" />
    
    
    </div>
    
    </div>
    <div className="ui celled list">
    {renderedResults}
    </div>
    
    </div>
  )
}

export default Search;