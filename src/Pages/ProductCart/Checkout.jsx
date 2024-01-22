import React, { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './Payment';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading';
import { useForm } from 'react-hook-form';

const stripePromise = loadStripe('pk_test_51ONHmVAPdL0RKBNT6M8Y7m781UyuUxpCTyPZWcibBk4XW1GXDlog33OHRf4i1F4z2xwP3TkEtxTnl7BVNNnCdP4u008IRLrFDb');

const Checkout = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const {user} = useContext(AuthContext);

    const { data: orders = [], refetch, isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:3000/bookings?email=${user?.email}`);
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
            <div className='md:grid md:grid-cols-2 gap-4 items-center my-10 md:my-0 flex flex-col-reverse'>
                <div className='px-4 md:px-0 w-full'>
                    <div>
                        <h1 className='text-xl font-semibold'>Billing Details</h1>
                        <form onSubmit={handleSubmit(handleCheckout)} className="card-body p-0 py-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Full Name <span className='text-red text-lg font-bold'>*</span></span>
                                </label>
                                <input {...register("name")} type="text" placeholder="Full Name" className="input input-bordered" required />
                                {errors.name && <p className='text-red'>{errors.name.message}</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Phone Number <span className='text-red text-lg font-bold'>*</span></span>
                                </label>
                                <input {...register("contact")} type="text" placeholder="Phone Number" className="input input-bordered" required />
                                {errors.contact && <p className='text-red'>{errors.contact.message}</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Full Address <span className='text-red text-lg font-bold'>*</span></span>
                                </label>
                                <input {...register("address")} type="text" placeholder="Full Address" className="input input-bordered" required />
                                {errors.address && <p className='text-red'>{errors.address.message}</p>}
                            </div>

                        </form>
                    </div>
                    <Elements stripe={stripePromise}>
                        <Payment></Payment>
                    </Elements>
                </div>
                <div className='px-4 md:px-10 bg-gray-100 py-20 w-full mb-4 md:mb-0'>
                    <h1 className='text-xl font-bold mb-4'>Your Order</h1>
                    {
                        orders.map((order, i) =>  <div className='md:grid md:grid-cols-2 items-center my-2 flex justify-between' key={i}>
                            <div className='flex items-center gap-2'>
                                <img className="w-20" src={`data:image/png;base64, ${order.image}`} alt="" />
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
                        <h1 className='text-lg my-2'>Taxs(%10)</h1>
                        <h1 className='text-lg my-2'>${orderPrice*0.1}</h1>
                    </div>

                    <hr className='border-b-1 border-gray' />
                    
                    <div className='flex justify-between'>
                        <h1 className='text-lg my-2 font-bold'>Total</h1>
                        <h1 className='text-lg my-2 font-bold'>${orderPrice + orderPrice*0.1 + deliveryCharge}</h1>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
};

export default Checkout;