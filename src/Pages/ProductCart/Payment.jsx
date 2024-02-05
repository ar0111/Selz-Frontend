import React, { useContext, useEffect, useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { AuthContext } from '../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Payment = ({orders, price, refetch}) => {
    // console.log(orders);
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    // console.log(user.displayName, user.email);

    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:3000/create-payment-intent", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json" 
        },
          body: JSON.stringify({ price }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);

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

        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user.diplayName,
                  email:user.email
                },
              },
            },
        );

        if(confirmError){
            setCardError(confirmError.message);
            return;
        }

        // console.log(paymentIntent);

        if(paymentIntent.status === 'succeeded'){
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email:user.email,
                orderList: orders
            }

            fetch("http://localhost:3000/payments", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify(payment),
                })
                .then((res) => res.json())
                .then(data => {
                    if(data.insertedId){
                        setTransactionId(payment.transactionId);
                    }
                });
            };

            // orders.map(order =>{
            //     fetch(`http://localhost:3000/bookings/${order._id}`, {
            //     method: "DELETE"
            //     })
            //     .then(res=>res.json())
            //     .then(data=>{
            //         if(data.deletedCount > 0){
            //             // toast.success("Delete Review Successfully")
            //             refetch();
            //         }
            //     })
            // })

            refetch();
            navigate('/success')
    }

    return (
        <div className='my-6'>
            <form className='w-50' onSubmit={handleSubmit}>
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
                <button className='btn btn-sm btn-info mt-5' type="submit" disabled={!stripe || !clientSecret}>Pay</button>
            </form>
            <p className='text-danger'>{cardError}</p>
            {/* {
                success && <div className='my-5'>
                    <p className='text-success'>{success}</p>
                    <p><b>{transactionId}</b></p>
                </div>
            } */}
        </div>
    );

};

export default Payment;