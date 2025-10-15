import { useState } from 'react'
import App1 from './Cart'
import Tart from './Tart'
import Pay from './Pay'
//items sold and pricing
const tarts=[

  {
    flavor:"Guava",
    price:16, 
    img: "chocolate_tart.jpg"
  },
  {
    flavor:"Coconut",
    price:17, 
    img: "chocolate_tart.jpg"
  },
  {
    flavor:"Pineapple",
    price:16, 
    img: "chocolate_tart.jpg"
  }
]


function App() {
  const [count, setCount] = useState(0);
 
var [itemTotal, setItemTotal] = useState(0);
var [overallTotal, setOverallTotal] = useState(0);
  //individual item/tart count



 function increase(){

    setItemTotal(itemTotal+1);
  
 
}
function decrease(){
    
    
  if(itemTotal==0){
    setItemTotal(0)
  } else{
  setItemTotal(itemTotal-1)
  
  }

}

 
  return (
   
    <div>
      <h2>{itemTotal}</h2>
     {tarts.map((tart, index)=>
      <Tart
      name= {tart.flavor}
      price={tart.price}
      count={itemTotal}
      img={tart.img}
      toIncrease={increase}
      toDecrease={decrease}
      key={index} />
     )}
    </div>
   
  )
}

export default App;
