
import { useState, useEffect } from "react";

import Item from './Item'
import tarts from "./tarts";
import Pay from "./Pay";
function Order() {

const [count, setCount] = useState(0);
 
var [itemTotal, setItemTotal] = useState(0);
var [overallTotal, setOverallTotal] = useState(0);
var [total, setTotal] = useState(0);
var [price, setPrice] = useState(0);
     let initialItems=[
              {
                name: 'Coconut',
                unitAmount: {
                  currencyCode: 'USD',
                  value: '16.00',
                },
                quantity: '0',
               
              },
              {
                name: 'Guava',
                unitAmount: {
                  currencyCode: 'USD',
                  value: '16.00',
                },
                quantity: '0',
                
              },
              {
                name: 'Pineapple',
                unitAmount: {
                  currencyCode: 'USD',
                  value: '16.00',
                },
                quantity: '0',
                
              }
            ] // remove tart from cart if quantity is zero or add as we go
var [items, setItems]=useState(initialItems);
  //individual item/tart count



 function increase(index){

    setOverallTotal(overallTotal+1);

  const nextItems= items.map((item, i) =>{
    if( i== index){
        item.quantity=parseInt(item.quantity)+1;
        item.quantity=item.quantity.toString();
        setPrice(price+parseInt(item.unitAmount.value));
        console.log(price);
        return item;
    }
 });
 
}
function decrease(){
    
    
  if(overallTotal==0){
    setOverallTotal(0)
  } else{
  setOverallTotal(overallTotal-1)
  
  }

}

  return (
    <div >
      <h3>{price}</h3>
        {tarts.map((tart, index) => <Item
        name= {tart.flavor}
      price={tart.price}
      count={overallTotal}
      img={tart.img}
      toIncrease={()=>increase(index)}
      toDecrease={decrease}
      hostId={tart.hostId}
      key={index}
        />
        )};
        <Pay cart={ [
      {
        amount: {
          currencyCode: 'USD',
          value: price.toString(),
          breakdown: {
            itemTotal: {
              currencyCode: 'USD',
              value: price.toString(),
            },
          },
        },
        items: items,
      }
    ]} 
        />
    </div>
  );
}

export default Order;
