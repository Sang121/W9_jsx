import React from 'react';

export default function HelloWorld() {
let name ="Sang"
const userName={
    name:"Lee",
    lastName:"Huy"
};
const formatName=(userName) =>{
    return userName.name +` `+ userName.lastName;
};

 return (
      <div>

 <div>Hello  {name} va` {formatName(userName)} </div>
 <div> {name==="Sang" ? 'Xin chao Sang': `Xin chao ${formatName(userName)}` }</div>
 <div>Rất vui được gặp bạn</div>
 </div>
 );

}
