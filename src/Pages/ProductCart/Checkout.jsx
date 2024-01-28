import React, { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './Payment';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading';
import { useForm } from 'react-hook-form';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_APP); 

const Checkout = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const {user} = useContext(AuthContext);

    const { data: orders = [], refetch, isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async()=>{
            const res = await fetch(`https://selz-server.vercel.app/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    if(isLoading) return <Loading></Loading>

    const handleCheckout = (data)=>{
        console.log(data);
    }

    let orderPrice = 0;
    {
        orders.map(order => orderPrice += parseInt(order.productPrice))
    }

    let deliveryCharge = orderPrice*0.05;

    return (
        <div className='container mx-auto'>
            <div className='flex justify-center items-center my-10 md:my-0'>
                <div className='px-4 md:px-10 bg-gray-100 py-20 mb-4 md:mb-0'>
                    <h1 className='text-xl font-bold mb-4'>Your Order</h1>
                    {
                        orders.map((order, i) =>  <div className='md:grid md:grid-cols-2 gap-24 items-center my-2 flex justify-between' key={i}>
                            <div className='flex items-center gap-2'>
                                <img className="w-20 rounded-lg" src={`data:image/png;base64, ${order.image}`} alt="" />
                                {order.productName}
                            </div>
                            ${order.productPrice}
                        </div>)
                    }

                    <hr className='border-b-1 border-gray' />

                    <div className='flex justify-between'>
                        <h1 className='text-lg my-2'>Subtotal</h1>
                        <h1 className='text-lg my-2'>${orderPrice}</h1>
                    </div>
                            
                    <div className='flex justify-between'>
                        <h1 className='text-lg'>Delivery Charge</h1>
                        <h1 className='text-lg'>${deliveryCharge}</h1>
                    </div>
                    
                    <div className='flex justify-between'>
                        <h1 className='text-lg my-2'>Taxs(10%)</h1>
                        <h1 className='text-lg my-2'>${orderPrice*0.1}</h1>
                    </div>

                    <hr className='border-b-1 border-gray' />
                    
                    <div className='flex justify-between'>
                        <h1 className='text-lg my-2 font-bold'>Total</h1>
                        <h1 className='text-lg my-2 font-bold'>${orderPrice + orderPrice*0.1 + deliveryCharge}</h1>
                    </div>

                    <div>
                        <Elements stripe={stripePromise}>
                            <Payment
                                orders={orders}
                                price={orderPrice + orderPrice*0.1 + deliveryCharge}
                                refetch={refetch}
                            ></Payment>
                        </Elements>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
};

export default Checkout;