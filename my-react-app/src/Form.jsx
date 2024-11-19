import { useState } from 'react'

function Form(props) {
 

  
  return (
    <div className="container">
    
    <h3>{props.count}</h3>
    <form>
      <label>Name</label>
      <input></input>
      <br/>
      <label>Delivery Date</label>
      <input></input>
      <br/>
      <label>Address</label>
      <input></input>
    </form>
  </div>
  )
  
}

export default Form;