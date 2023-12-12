// App.js

import React from 'react';
import { CardElement } from 'react-stripe-elements';

const App = () => {
  return (
    <div>
      <h1>Your React App</h1>
      <form>
        <CardElement />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default App;
