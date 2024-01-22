import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const Payment = () => {
    const [cardError, setCardError] = useState('');

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(event)=>{
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if(error){
            console.log(error);
            setCardError(error.message);
        }
        else{
            setCardError('');
        }
    }

    return (
        <div className='container mx-auto my-20'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                            color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                        },
                    }}
                />
                <button className='btn btn-sm btn-info mt-5' type="submit" disabled={!stripe}>Pay</button>
            </form>
        </div>
    );
};

export default Payment;