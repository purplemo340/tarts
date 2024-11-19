import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tarts from './Tarts'
import Total from './Total'
import CheckoutForm from './CheckoutForm'
import App1 from './Cart'

const tarts=[

  {
    flavor:"Guava",
    price:16
  },
  {
    flavor:"Coconut",
    price:17
  },
  {
    flavor:"Pineapple",
    price:16
  }
]

function setTart(tart){

}

function App() {
  var [tartCount, setTartCount] = useState(0);
 function overall(cnt){
  setTartCount(prevCount=>{
    return cnt;
  })
  
 }

 //////////////////////
 var [total, setTotal] = useState(0);

 function increase(){

    setTartCount(tartCount+1);
  
 
}
function decrease(){
    
    
  if(tartCount==0){
    setTartCount(0)
  } else{
  setTartCount(tartCount-1)
  
  }

}

 
  return (
   
    <div>
      {tarts.map((tart, index) =>
      <Tarts 
      name= {tart.flavor}
      img="chocolate_tart.jpg"
      price={tart.price}
      toCount={overall}
      toIncrease={increase}
      toDecrease={decrease}
      count={tartCount}
      key={index}
    
    />
  )}
    <Total count={tartCount}/>
    
    <App1 />
    </div>
   
  )
}

export default App;
