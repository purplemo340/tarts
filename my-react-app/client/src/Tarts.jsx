import { useState, useContext } from 'react'
import Tart from './Tart'

//items sold and pricing
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



function Tarts() {
  const count1=useContext(countContext);
  //individual item/tart count
  var [tartCount, setTartCount] = useState(0);
 function overall(cnt){
   setTotalPrice(prevPrice=>{
  totPrice=prevPrice+totPrice;
  return totPrice;
 })
  
  
 }
 var [totPrice, setTotalPrice] = useState(0);



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
      <Tart 
      name= {tart.flavor}
      img="chocolate_tart.jpg"
      price={tart.price}
      count={tartCount}
      totPrice={totPrice}
      key={index}
    
    />
  )}
    <h3>{totPrice}</h3>
    </div>
   
  )
}

export default Tarts;
