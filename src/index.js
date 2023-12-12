// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { StripeProvider } from 'react-stripe-elements';
import App from './App'; // Import your main App component

ReactDOM.render(
  <StripeProvider apiKey="pk_test_51OJdFsI7xmZkPaQI6jfFywINqgAlU0EpnE3E9CbxZipUQfgJoiAMUSoibFxKTxpQxWkqwUUCvDsaa56UqJNANXGm007pwbxsk3">
    <App />
  </StripeProvider>,
  document.getElementById('root')
);
