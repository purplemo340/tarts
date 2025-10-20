
import { useState, useEffect } from "react";
import tarts from "./tarts";
import More from './More';

function Tart(props) {
  useEffect(()=>{
  cartPaypal.AddToCart({ id: props.hostId})
}, []);

  return (
    <div >
      <div className="hidden tart">
        <h2>{props.name} Tart</h2>
          <img 
            src={props.img} 
            alt="Tart_img"
          />
         
          <h2>Price:${props.price}</h2>
          <a href="tart/0">Link</a>
</div>
<div>
<paypal-add-to-cart-button  data-id={props.hostId}></paypal-add-to-cart-button>
</div>

        
    </div>
  );
}

export default Tart;
