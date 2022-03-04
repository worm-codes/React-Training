import faker from "@faker-js/faker";
import React from "react";
import ComponentDetails from "./ComponentsOfFirstSample/ComponentDetails";
import Card from "./ComponentsOfFirstSample/Card";
const FirstSample=()=> {
  
  return (
    
     <div className='ui container comments'>
    
       

      {/*AÇMA KAPAMA OLARAK YAPIP İÇİNE ATARSAK PROPS.CHILD YAZARAK BU ELEMANA ERISIP GOSTEREBILIYORUZ*/}
      <Card>
      <ComponentDetails imageForAvatar={faker.image.avatar()} author={faker.name.firstName()} dateTime='18:23' content={faker.lorem.text()} />
       </Card>
       <Card>
      <ComponentDetails imageForAvatar={faker.image.avatar()} author={faker.name.firstName()} dateTime='18:25' content={faker.lorem.text()} />
       </Card>
       <Card>
      <ComponentDetails imageForAvatar={faker.image.avatar()} author={faker.name.firstName()} dateTime='18:27' content={faker.lorem.text()} />
       </Card>

       <a className="ui inverted primary button margin-top:20px" href="/">Go Home...</a>
      </div>
     

  );
}

export default FirstSample;



