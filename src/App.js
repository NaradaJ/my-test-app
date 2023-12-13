import React from 'react';
import { Elements } from 'react-stripe-elements'; // Import Elements from react-stripe-elements
import CheckoutForm from './CheckoutForm'; // Import your CheckoutForm component

const App = () => {
  return (
    <div>
      <h1>Your React App</h1>
      <form>
        {/* Wrap your CheckoutForm with Elements to initialize the Stripe context */}
        <Elements>
          <CheckoutForm />
        </Elements>
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default App;
