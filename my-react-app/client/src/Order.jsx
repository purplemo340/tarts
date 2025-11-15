
import { useState, useEffect } from "react";
import Item from './Item'
import tarts from "./tarts";
import Pay from "./Pay";
import Cart from "./Cart";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";
function Order() {
const navigate = useNavigate()
const [count, setCount] = useState(0);
 
var [itemTotal, setItemTotal] = useState(0);
var [overallTotal, setOverallTotal] = useState(0);
var [total, setTotal] = useState(0);
var [price, setPrice] = useState(0);
var [items, setItems]=useState([]);
  //individual item/tart count



 function increase(index, t){

    setOverallTotal(overallTotal+1);
    if(items.length==0){
      setItems([
        ...items ,
        {
                name: t.flavor,
                unitAmount: {
                  currencyCode: 'USD',
                  value: t.price,
                },
                quantity: '1',
               
              },
      ])
      
        setPrice(price+parseInt(t.price));
    }

   
    
    else if (!items.some(e=>e.name===t.flavor) ){
      console.log(typeof(t.flavor))
      setItems([
        ...items,
        {
                name: t.flavor,
                unitAmount: {
                  currencyCode: 'USD',
                  value: t.price,
                },
                quantity: '1',
               
              }
      ])
      
        setPrice(price+parseInt(t.price));
      console.log(items)
    }
    else{
      console.log("hi")
  const nextItems= items.map((item, i) =>{
    items.sort();
    console.log(i," " ,index)
    if (items.length==1){
      item.quantity=parseInt(item.quantity)+1;
        item.quantity=item.quantity.toString();
        setPrice(price+parseInt(item.unitAmount.value));
        console.log(price);
        
        return item;
    }
    if( i== index){
        
        item.quantity=parseInt(item.quantity)+1;
        item.quantity=item.quantity.toString();
        setPrice(price+parseInt(item.unitAmount.value));
        console.log(price);
        
        return item;
    }
    
 });
}
    
 
}
function decrease(index, t){
    
    
  if(overallTotal==0){
    setOverallTotal(0)
    const nextItems= items.map((item, i) =>{
    items.sort();
    if( i== index){
        
        item.quantity=0;
        item.quantity=item.quantity.toString();
        
        return item;
    }
    
 });
  } else{
  setOverallTotal(overallTotal-1)
  const nextItems= items.map((item, i) =>{
    items.sort();
    if( i== index){
        
        item.quantity=parseInt(item.quantity)-1;
        item.quantity=item.quantity.toString();
        setPrice(price-parseInt(item.unitAmount.value));
        console.log(price);
        
        return item;
    }
    
 });
  
  }

}
function clear(){
  setOverallTotal(0);
  setPrice(0);
  setItems([]);
}

  return (
    <div >
      <h3>{price}</h3>
      <div className="items">
        {tarts.map((tart, index) => <Item
        name= {tart.flavor}
      price={tart.price}
      count={overallTotal}
      img={tart.img}
      toIncrease={()=>increase(index, tart)}
      toDecrease={() => decrease(index, tart)}
      hostId={tart.hostId}
      key={index}
        />
        )}
        </div>
        <button className="clear" onClick={clear}>Clear</button>
        <form>
          <label>Name:</label>
          <input id="customer" value="name"></input>
        </form>
        <Pay cart={[
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
        items: items
      }
       ]} 
       name={''}
       instructions={'instructions'}
        />
       
    </div>
  );
}

export default Order;
