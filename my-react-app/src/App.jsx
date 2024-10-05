import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tarts from './Tarts'


function App() {
  var [tartCount, setTartCount] = useState(0);
 function overall(cnt){
  setTartCount(prevCount=>{
    return cnt;
  })
  
 }

 //////////////////////
 const [count, setCount] = useState(0);
 var [total, setTotal] = useState(0);

 function increase(){
    
  //setCount(value);
  

    setCount(count+1);
    console.log(count);
    //tarts();
  /* setTotal(prevTotal=>{
    
    return (prevTotal+price);
  })
   */
  
 
}
function decrease(){
    
    
  if(count==0){
    setCount(0)
  } else{
  setCount(count-1)
  
  }
  //tarts();
}
 
  return (
    <div>
      <Tarts name="Guava" 
    img="chocolate_tart.jpg"
    price={16}
    toCount={overall}
    toIncrease={increase}
    toDecrease={decrease}
    count={count}
    
    />
    
    <Tarts name="Coconut" 
    img="chocolate_tart.jpg"
    price={17}
    toCount={overall}
    toIncrease={increase}
    toDecrease={decrease}
    count={count}
    />
    <Tarts name="Pineapple" 
    img="chocolate_tart.jpg"
    price={16}
    toCount={overall}
    toIncrease={increase}
    toDecrease={decrease}
    count={count}
   
    />
    <h3>Total: {count}</h3>
    
    </div>
  )
}

export default App
