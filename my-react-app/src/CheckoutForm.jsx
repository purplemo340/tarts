import {PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  return (
    <form>
     <label>Checkout</label>
     
     <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;