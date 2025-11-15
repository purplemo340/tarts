import { useState, useEffect } from 'react'
import Cart from './Cart.jsx'
import Tart from './Tart'
import Pay from './Pay'
import More from './More'
import tarts from './tarts.js';
import Order from './Order.jsx'
import Item from './Item'
import Items from './Items.jsx'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";

function App() {
// total of all items
var [overallTotal, setOverallTotal] = useState(0);
//price of all items
var [price, setPrice] = useState(0);
//array of all items
var [items, setItems]=useState(
  tarts.map((tart)=>(
  {
    name: tart.flavor,
    unitAmount:{
      currencyCode: 'USD',
      value: tart.price,
    },
    quantity: '0',
  }
  ))
);
//increase of all items
  function increase(index, t){

setOverallTotal(overallTotal+1);
  
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

    console.log(overallTotal);
 
}
function decrease(index, t){

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


 
function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    console.log(formData.entries());
    // You can pass formData as a fetch body directly:
    const data=fetch('/api/test1', { 
      method: [form.method],
      headers: {
  'Content-Type': 'application/json'
},
      body: JSON.stringify(Object.fromEntries(formData)) 
    });

    // Or you can work with it as a plain object:
    const formJson = JSON.stringify(Object.fromEntries(formData));
    console.log(JSON.stringify('name:hi'));
  }


 
//Home page that has the items displayed
const Home = () => {
    
 const navigate = useNavigate();
 

    return (
      <div>
        <h3>{price}</h3>
        {tarts.map((tart, index) => <Item
        name= {tart.flavor}
      price={tart.price}
      count={items[index].quantity}
      img={tart.img}
      toIncrease={()=>increase(index, tart)}
      toDecrease={() => decrease(index, tart)}
      items={items}
      hostId={tart.hostId}
      key={index}
        />
        )}
        <button onClick={()=> navigate('/cart')}>Cart({overallTotal})</button>
     </div>
    
    );
};

  return (
   
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/" element={<Home
          />}></Route>
          <Route path="/test" element= {<Order
          />}></Route>
          <Route path="/cart" element={<Cart
          cart={items}
          price={price}
          />}> </Route>
         {/*  <Route path="order/:id" element={<Pay />}> </Route>
          <Route path="/tart/:id" element={<More />}></Route> */}
        </Routes>
      </Router>
      
    </div>
   
  )
}

export default App;
