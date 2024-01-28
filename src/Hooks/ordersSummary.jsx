import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query'

const ordersSummary = (email) => {

    const [orders, setOrders] = useState({});

    useEffect(()=>{
        const fetchData = async () => {
            const result = await fetch(`https://selz-server.vercel.app/bookings?email=${email}`);
            const data = await result.json();
            setOrders(data);
        }
        
        fetchData();

    },[email])

    console.log(orders);

    // const { data: productList = [], refetch, isLoading } = useQuery({
    //     queryKey: ['bookings', email],
    //     queryFn: async()=>{
    //         const res = await fetch(`https://selz-server.vercel.app/bookings?email=${email}`);
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    // setOrders(productList);
    // refetch();

    // console.log(orders[0]);

    // setOrderLength(orders.length);
    let orderPrice = 0;
    {   
        for(let i=0; i<orders.length; i++){
            orderPrice += parseInt(orders[i].productPrice)
        }
    }

    let deliveryCharge = orderPrice*0.05;
    let tax = orderPrice * 0.1;
    let total = orderPrice + deliveryCharge + tax;

    // setOrderTotal(total);

    return [orders.length, total]
};

export default ordersSummary;