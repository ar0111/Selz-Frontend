import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const ordersSummary = (email) => {

    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState({});

    useEffect(()=>{
        if(email){
            fetch(`http://localhost:3000/bookings?email=${email}`)
            .then(res => res.json())
            .then(data=>{
                // console.log(data);
                setOrders(data);
            })
        }
    },[email])

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