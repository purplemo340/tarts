import { useState, useEffect } from 'react'
import App1 from './Cart'
import Tart from './Tart'
import Pay from './Pay'
import More from './More'
import tarts from './tarts.js';
import Order from './Order.jsx'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";


//items sold and pricing



function App() {
  useEffect(()=>{
cartPaypal.Cart({ id: "pp-view-cart" })
cartPaypal.AddToCart({ id: "AMUPKYV67G5GL" })
})
  const [count, setCount] = useState(0);
 
var [itemTotal, setItemTotal] = useState(0);
var [overallTotal, setOverallTotal] = useState(0);

  //individual item/tart count



 

const Home = () => {
    const navigate = useNavigate();

    return (
      <div>
        <div className='tarts fifty'>
     {/* {tarts.map((tart, index)=>
      <Tart
      name= {tart.flavor}
      price={tart.price}
      img={tart.img}
      hostId={tart.hostId}
      key={index} />
     )} */}
     <h2>Instructions</h2>
     <h3>After adding all of the tarts to the cart and the delivery instructions.
      Click on the button on the top right to view the cart, and pay. All orders must 
      be in by --date--. No Exceptions!!!!All tarts will be delivered by --date--
     </h3>
     </div>
      <div className="forty">
  <h1>Happy Holidays</h1>
  <p>After choosing all the tart that you desire, click on the cart in the top right to pay and input delivery instructions. </p>
  <paypal-add-to-cart-button data-id="AMUPKYV67G5GL"></paypal-add-to-cart-button>
</div>
     <div>
      

     </div>
     
     </div>
    
    );
};

 
  return (
   
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/test" element= {<Order />}></Route>
         {/*  <Route path="order/:id" element={<Pay />}> </Route>
          <Route path="/tart/:id" element={<More />}></Route> */}
        </Routes>
      </Router>
      
    </div>
   
  )
}

export default App;
