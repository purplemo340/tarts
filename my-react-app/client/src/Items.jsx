import { useState, useEffect } from "react";
import tarts from "./tarts";
import Item from "./Item";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";
import Cart from "./Cart";
function Items(){
    var [items, setItems]=useState([]);
 const navigate = useNavigate();
    var [itemTotal, setItemTotal] = useState(0);
var [overallTotal, setOverallTotal] = useState(0);

  //individual item/tart count

const [count, setCount] = useState(0);
 
var [itemTotal, setItemTotal] = useState(0);
var [overallTotal, setOverallTotal] = useState(0);
var [total, setTotal] = useState(0);
var [price, setPrice] = useState(0);
var [items, setItems]=useState([]);
var [name, setName] = useState();
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
        
        
        return item;
    }
    
 });
}
    console.log(overallTotal);
 
}
function decrease(index, t){
 if(overallTotal==0){
    setOverallTotal(0)
    setItems([])
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
function testing(){
  console.log('hi');
  return(<Cart/>)
}
return(
  
    <div >
      
      <h3>{price}</h3>
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
        <button onClick={()=> navigate('/cart')}>Cart({overallTotal})</button>
        <button onClick={()=> testing()}>Cart({overallTotal})</button>
        <form action="/api/test1"><button type="submit" >Cart1({overallTotal})</button></form>
        <button onClick={()=> navigate('/test')}>Test</button>
        {/* <div hidden="hidden"> */}
        
        {/* </div> */}
       {/*  <Pay cart={[
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
        /> */}
       
    </div>
     
)
}
export default Items;