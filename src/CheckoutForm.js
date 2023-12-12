import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class CheckoutForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    const { token } = await this.props.stripe.createToken();
    console.log(token); // Handle the token on the server (send to your backend)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardElement />
        <button type="submit">Pay</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);