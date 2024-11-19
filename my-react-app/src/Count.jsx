import { useState } from 'react'
import Total from './Total';

function Count(props) {
 
  const [count, setCount] = useState(0);
 
  var [total, setTotal] = useState(0);

  function tarts(){
    props.toCount(count);
  }
  function increase(){
    
    //setCount(value);
    
    
      setCount(count+1);
      // tarts();
    setTotal(prevTotal=>{
      
      return (prevTotal+props.price);
    })
    
    
   
  }
  function decrease(){
    
    
    if(count==0){
      setCount(0)
    } else{
    setCount(count-1)
    setTotal(prevTotal=>{
      console.log(total)
      return (prevTotal-props.price);
    })
    }
    //tarts();
  }
  function changeInput(event){
    const { value, name } = event.target;

        setCount(value);
  }
  
  
  return (
    <div className="container">
    <h3>{count}</h3>
    <button  onClick={()=>{
        decrease();
        props.toDecrease(props.count);}}>-</button>
        
    <button onClick={
      ()=>{
      increase();
      props.toIncrease(props.count);
      
      }}>+</button>
    
   
    <h3>{total}</h3>
    
  </div>
  )
  
}

export default Count;

