import React, { useState } from "react";
import Count from "./count";



function Tarts(props) {
  
  return (
    <div className="tart">
        <h2>{props.name} Tart</h2>
          <img 
            src={props.img}
            alt="Tart_img"
          />
         
          <h2>Price:${props.price}</h2>
          <Count  
          toIncrease={()=>{
            props.toIncrease(props.count);}} 
          toDecrease={()=>{
            props.toDecrease(props.count);}} 
          price={props.price} 
          count={props.count}/>
        
       
    </div>
  );
}

export default Tarts;
