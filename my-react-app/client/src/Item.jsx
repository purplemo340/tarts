import { useState, useEffect } from "react";

function Item(props){
    var [total, setTotal] = useState(props.count);
    
 
  function increaseItem(){
    setTotal(prevTotal => prevTotal + 1);
    props.toIncrease();
}

function decreaseItem(){
  if(props.count!=0 && total!=0){
  props.toDecrease();
  }
  if(total==0){
    setTotal(0)
  } else{
  setTotal( total-1);
  }

}
const button = document.querySelector(".clear");
if (button){
  document.querySelector(".clear").addEventListener("click", function(){
  setTotal(0);
});
}
    return(
        <div>
            <div className="item">
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
         onClick={() =>{
            increaseItem()
         }}>+</button>
        <h3>{total}</h3>
        {/* <button> Add to cart</button> */}
        </div>
        
        </div>
    );
}

export default Item;