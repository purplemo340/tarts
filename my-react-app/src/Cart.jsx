import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export default function App1() {
  const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
     <CheckoutForm />
    </Elements>
  );
};