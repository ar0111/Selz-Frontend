import React, { useEffect, useState } from 'react';
import EmptyProductButton from './EmptyProductButton';
import { Checkmark } from 'react-checkmark'

const ProductPage = ({product, setDesireProduct}) => {
    const {name, price, condition, seller, email, phone, location, description, year, image, quantity} = product;
    const [data, setData] = useState({})
    // console.log(product);
    // console.log('selected product', product);

    useEffect(()=>{
        if(email){
            fetch(`http://localhost:3000/users/${email}`)
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    setData(data);
                })
        }
    },[email])

    console.log(data.emailVerified);

    return (
        <div>
            <div className="card w-auto bg-base-100 shadow-xl overflow-hidden">
                <figure><img className='w-auto h-48' src={`data:image/png;base64,${image}`} alt={name} /></figure>
                <div className="card-body  overflow-hidden p-4">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Product Name:</th>
                                    <td>{name}</td>
                                </tr>
                                <tr>
                                    <th>Price:</th>
                                    <td>${price}</td>
                                </tr>
                                <tr>
                                    <th>Product Condition:</th>
                                    <td>{condition}</td>
                                </tr>
                                <tr>
                                    <th>Seller Name:</th>
                                    <div className='flex items-center'>
                                        <td>{seller}</td>
                                        {
                                            data.emailVerified? <Checkmark size='15px' color='blue'></Checkmark> : <Checkmark size='15px' color='gray'></Checkmark>
                                        }
                                    </div>
                                    
                                </tr>
                                <tr>
                                    <th>Seller Mobile No.:</th>
                                    <td>{phone}</td>
                                </tr>
                                <tr>
                                    <th>Product Location:</th>
                                    <td>{location}</td>
                                </tr>
                                <tr>
                                    <th>Year of Purchase:</th>
                                    <td>{year}</td>
                                </tr>
                                <tr>
                                    <th>Product Description:</th>
                                    <td>{description}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {
                        quantity !== '0'?  <div className="card-actions justify-center">
                            <label htmlFor='booking-modal' className="btn btn-info uppercase" onClick={() => setDesireProduct(product)}>Book Now</label>  
                        </div> : <EmptyProductButton></EmptyProductButton>
                    }

                    

                    {/* <div className="card-actions justify-center">
                        <label htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
                        onClick={() => setTreatment(appointmentOption)}
                        >Book Appointment</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;

// onClick={()=>document.getElementById('booking_modal').showModal()}