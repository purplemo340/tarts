import { useState, useEffect } from 'react'
import App1 from './Cart'
import Tart from './Tart'
import Pay from './Pay'


//items sold and pricing
const tarts=[

  {
    flavor:"Guava",
    price:16, 
    img: "chocolate_tart.jpg",
    hostId: "UQLMFEBM7AM4J"
  },
  {
    flavor:"Coconut",
    price:17, 
    img: "chocolate_tart.jpg",
    hostId: "NQXM3F242C7Q8"

  },
  {
    flavor:"Pineapple",
    price:16, 
    img: "chocolate_tart.jpg",
    hostId: "CDR4QDKKTW5UN" 
  }
]


function App() {
  useEffect(()=>{
cartPaypal.Cart({ id: "pp-view-cart" })
})
  const [count, setCount] = useState(0);
 
var [itemTotal, setItemTotal] = useState(0);
var [overallTotal, setOverallTotal] = useState(0);
  //individual item/tart count



 function increase(){

    setOverallTotal(overallTotal+1);
  
 
}
function decrease(){
    
    
  if(overallTotal==0){
    setOverallTotal(0)
  } else{
  setOverallTotal(overallTotal-1)
  
  }

}


 
  return (
   
    <div className='container'>
      <div className='tarts'>
      <h2>{overallTotal}</h2>
     {tarts.map((tart, index)=>
      <Tart
      name= {tart.flavor}
      price={tart.price}
      count={overallTotal}
      img={tart.img}
      toIncrease={increase}
      toDecrease={decrease}
      hostId={tart.hostId}
      key={index} />
     )}
     </div>
    <paypal-cart-button data-id="pp-view-cart"></paypal-cart-button>
    </div>
   
  )
}

export default App;
