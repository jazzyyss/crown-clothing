import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GwISNCqTxUZFLgGdsbf4qrH5ACRLwwWF3KdwnkeYdnRKN5dLB5W9Lv6ZPHq2HUym1SjmLTrXMQZcml2nQuGEF4r00I2LqIwRp';
    const onToken = token => {
        console.log(token);
        alert('payment successful');
    }
    return (
        <StripeCheckout
            label='pay now'
            name='crown clothing ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;