import Pay from "./Pay";
import { useState, useEffect } from 'react'
import tarts from "./tarts";

function Cart(props){
  var [fname, setfName] = useState();
var [lname, setlName] = useState();
var [date, setDate] = useState();
var [delivery, setDelivery] = useState();
var [Instructions, setInstructions] = useState();
var [phone, setPhone] = useState();
const getCart = [];
const cart= props.cart.filter(i=>i.quantity !=0)
for(let i=0; i<cart.length; i++){
  getCart.push(<div>
    <h3>{cart[i].name}</h3>
    <img 
            src={tarts[i].img} 
            alt="Tart_img"
          />
    <h3>{cart[i].quantity}</h3>
    </div>)
}



function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    console.log(formData.entries());
    // You can pass formData as a fetch body directly:
    const data=fetch('/api/test', { 
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


  return(
    <div>
      <h1>Cart</h1>
    <div>{getCart}</div>
    <p>Please enter your information below: Use the paypal buttons to pay right now. Use the submit button to get submit your order.</p>
      <form className='form' onSubmit={handleSubmit} method='POST' id='form'>
          <div className="customerName">
          <label>First Name: </label>
          <input className='customerNameInput' type='text' required name='firstName' value={fname} onChange={e => setfName(e.target.value)}></input>
          <label>Last Name: </label>
          <input className='customerNameInput' type='text' required name='lastName' value={lname} onChange={e => setlName(e.target.value)}></input>
          <label>Phone Number: </label>
          <input className='phone' type='text' required name='phone' value={phone} onChange={e => setPhone(e.target.value)}></input>
          </div>
          <br/>
          <div>
          <label>Delivery Date: </label>
          <input className='delivery' type='date' required name='date' value={date} onChange={e => setDate(e.target.value)}></input>
          
          <label>Address: </label>
          <input className='delivery' type='text' required name='address' value={delivery} onChange={e => setDelivery(e.target.value)}></input>
          </div>
          <br/>
          <div>
          <label>Delivery Instructions: </label>
          <br/>
          <textarea className='delivery' type='text' required name='instructions' placeholder="Give directions to delivery address or who to leave the tarts with. " value={Instructions} onChange={e => setInstructions(e.target.value)}></textarea>
          </div>
          <br/>
          <button type='submit'>Submit</button>
        </form>
      <Pay
      name={fname}
      cart={[
        {
        amount: {
          currencyCode: 'USD',
          value: props.price.toString(),
          breakdown: {
            itemTotal: {
              currencyCode: 'USD',
              value: props.price.toString(),
            },
          },
        },
        items: cart
      }
       ]} 
      />
    </div>
  )
}

export default Cart;