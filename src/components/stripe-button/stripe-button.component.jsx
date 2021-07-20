import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JF6kWIorPlGZvGawVX2XTXxW4WUfKGmOpBpqK2yS5wXV6E8eoGE00U2E1fmPwDcqCeoKbmqbrhsGR4Xs6ojcjkB00uvS94iF4'

    const onToken = token => {
        console.log(token)
        alert('Payment successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Brook Clothing LLC.'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;