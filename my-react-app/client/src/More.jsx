import { useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import tarts from './tarts.js'
function More(id){
    const param = useParams();
    useEffect(()=>{
  cartPaypal.AddToCart({ id: tarts[param.id].hostId})
}, []);

    return(
        <div>
            <paypal-add-to-cart-button  data-id={tarts[param.id].hostId}></paypal-add-to-cart-button>
        </div>
    )
}

export default More;