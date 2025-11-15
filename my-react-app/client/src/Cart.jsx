import Pay from "./Pay";

function Cart(props){
const getCart = [];
for(let i=0; i<props.cart.length; i++){
  getCart.push(<div>
    <h1>{props.cart[i].name}</h1>
    <h1>{props.cart[i].quantity}</h1>
    </div>)
}
  return(
    <div>
      <h1>Cart</h1>
    <div>{getCart}</div>
    
      <form className='form'  method='POST'>
          <input className='customerName' type='text' name='name' value={name} onChange={e => setName(e.target.value)}></input>
          <button type='submit'>Submit</button>
        </form>
      <Pay/>
    </div>
  )
}

export default Cart;