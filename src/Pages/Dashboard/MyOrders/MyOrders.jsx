import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Components/Loading';
import { Link } from 'react-router-dom';
import EmptyOrder from './EmptyOrder';

const MyOrders = () => {

    const {user} = useContext(AuthContext);

    const { data: orders = [], refetch, isLoading } = useQuery({
        queryKey: ['bookings-orders', user?.email],
        queryFn: async()=>{
            const res = await fetch(`https://selz-server.vercel.app/bookings-orders?email=${user?.email}`);
            const data = await res.json();
            // console.log(data);
            // const finalData = JSON.stringify(data);
            return data;
        }
    })
    console.log(orders.length);

    if(isLoading) return <Loading></Loading>

    const deleteOrder = (order)=>{
        console.log(order);
        const aggree = window.confirm(`Are you want to delete ${order.productName}`);
        if(aggree){
            // console.log("Yes Aggree");
            fetch(`https://selz-server.vercel.app/bookings/${order._id}`, {
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

            fetch(`https://selz-server.vercel.app/bookings/${order.productCategory}/${order.productID}`, {
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

    return (
        <>
            {
                orders.length? <>
                    <div className="overflow-x-auto rounded-lg shadow-2xl">
                        <table className="table w-full">
                            <thead className="bg-cyan-200">
                                <tr className='uppercase text-sm font-bold'>
                                    <th></th>
                                    <th>Avatar</th>
                                    <th>Product name</th>
                                    <th>product price</th>
                                    <th>seller name</th>
                                    <th>seller contact</th>
                                    <th>payment status</th>
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
                                        <td>{order.seller}</td>
                                        <td>{order.sellercontact}</td>
                                        <td>
                                            {
                                               !order.paid && <Link to={'/cart'}><button className='btn btn-sm btn-info'>PAY</button></Link>
                                            }
                                            {
                                                order.paid && <span className='text-success'>PAID</span>
                                            }
                                        </td>
                                        <td><button onClick={()=> deleteOrder(order)} className='btn btn-sm btn-info text-white'>Delete</button></td>
                                        
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
            
                    <div className='flex justify-center md:justify-end my-16'>
                        <Link to='/cart'><button className='btn btn-info uppercase px-20 text-lg'>Go To Cart</button></Link>
                    </div>
                </> : <EmptyOrder></EmptyOrder>
            }
            
            
        </>
        
    );
};

export default MyOrders;