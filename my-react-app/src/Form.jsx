import { useState } from 'react'

function Total(props) {
 

  var [total, setTotal] = useState(0);

  function tarts(){
    setTotal(prevTotal=>{
      console.log(total)
      return prevTotal+(props.total);
    })
  }
 
  
  
  
  return (
    <div className="container">
    {tarts}
    <h3>{total}</h3>
  </div>
  )
  
}

export default Total;