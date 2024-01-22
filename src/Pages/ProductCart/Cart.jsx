import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../../Components/Loading';
import EmptyOrder from '../Dashboard/MyOrders/EmptyOrder';
import { RiDeleteBin6Fill } from "react-icons/ri";

const Cart = () => {

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

    const deleteOrder = (order)=>{
        console.log(order);
        const aggree = window.confirm(`Are you want to delete ${order.productName}`);
        if(aggree){
            fetch(`http://localhost:3000/bookings/${order._id}`, {
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    toast.success("Delete Orders' Product Successfully")
                    refetch();
                }
            })

            fetch(`http://localhost:3000/bookings/${order.productCategory}/${order.productID}`, {
                method: "PUT"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.modifiedCount > 0){
                    refetch();
                }
            })
        }
    }

    let orderPrice = 0;
    {
        orders.map(order => orderPrice += parseInt(order.productPrice))
    }

    let deliveryCharge = orderPrice*0.05;

    return (
        <div className='container mx-auto my-16'>

            {
                orders.length? 
                <>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-0'>
                        <div className='col-span-2'>
                            <div className="overflow-x-auto rounded-lg shadow-2xl">
                                <table className="table w-full">
                                    <thead className="bg-cyan-200">
                                        <tr className='uppercase text-sm font-bold'>
                                            <th></th>
                                            <th>Avatar</th>
                                            <th>Product name</th>
                                            <th>product price</th>
                                            <th>remove item</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            orders.map((order, i) =>  <tr key={i}>
                                                <th>{i+1}</th>
                                                <td><img className="w-10 rounded-full" src={`data:image/png;base64, ${order.image}`} alt="" /></td>
                                                <td>{order.productName}</td>
                                                <td>${order.productPrice}</td>
                                                <td><button onClick={()=> deleteOrder(order)} className='btn btn-sm btn-neutral text-white'><RiDeleteBin6Fill /></button></td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div className="overflow-x-auto rounded-lg shadow-2xl p-10">
                    
                            <h1 className='text-xl mb-4'>Order Summary</h1>
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
                            
                            <div className='flex justify-between'>
                                <h1 className='text-lg my-2 font-bold'>Total</h1>
                                <h1 className='text-lg my-2 font-bold'>${orderPrice + orderPrice*0.1 + deliveryCharge}</h1>
                            </div>
                            
                            <div className='flex justify-end'>
                                <div className='mt-8'>
                                    <Link to='/checkout'><button className='uppercase btn btn-info text-lg px-6'>Checkout</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : <EmptyOrder></EmptyOrder>
            }
        </div>
    );
};

export default Cart;