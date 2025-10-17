
import { useState, useEffect } from "react";



function Tart(props) {
  useEffect(()=>{
  cartPaypal.AddToCart({ id: props.hostId})
}, []);

  var [total, setTotal] = useState(0);
  function increaseItem(){
    setTotal(total+1);
    props.toIncrease();
 
}
function decreaseItem(){
  if(props.count!=0 && total!=0){
  props.toDecrease();
  }
  if(total==0){
    setTotal(0)
  } else{
  setTotal(total-1);
  }

}
  return (
    <div className="tart">
        <h2>{props.name} Tart</h2>
          <img 
            src={props.img} 
            alt="Tart_img"
          />
         
          <h2>Price:${props.price}</h2>
         <button onClick={
          decreaseItem
         }>-</button>
         <button 
         onClick={
            increaseItem
          }>+</button>
        <h3>{total}</h3>
        
        <paypal-add-to-cart-button data-id={props.hostId}></paypal-add-to-cart-button>
    </div>
  );
}

export default Tart;
