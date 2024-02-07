import React, { useContext, useEffect, useState } from 'react';
import EmptyProductButton from './EmptyProductButton';
import { Checkmark } from 'react-checkmark';
import { FaArrowsRotate } from "react-icons/fa6";
import toast from 'react-hot-toast';
import { FaHeart } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider';

const ProductPage = ({product, setDesireProduct, refetch}) => {
    const {user} = useContext(AuthContext);
    const {name, price, condition, seller, email, phone, location, description, year, image, quantity, category, id} = product;
    // console.log(product);
    const [data, setData] = useState({})
    
    // console.log("Compare Product", compareProduct);
    // console.log(product);
    // console.log('selected product', product);

    useEffect(()=>{
        if(email){
            fetch(`https://selz-server.vercel.app/users/${email}`)
                .then(res=>res.json())
                .then(data=>{
                    // console.log(data);
                    setData(data);
                })
        }
    },[email])

    const handleCompare = (event)=>{
        event.preventDefault();

        const desireProduct = {
            name, 
            price,
            condition,
            description,
            year,
            image,
            category,
            id,
            email:user.email
        }

        fetch('https://selz-server.vercel.app/compare',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(desireProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                toast.success("Product Added to Compare Successfully!");
                refetch();
            } else{
                toast.error(data.message);
            }
        })
    }

    const handleFavourite = (event)=>{
        event.preventDefault();

        const desireProduct = {
            name, 
            price,
            condition,
            description,
            year,
            image,
            category,
            id,
            email:user.email
        }

        fetch('https://selz-server.vercel.app/favourite',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(desireProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                toast.success("Product Added Favourite List Successfully!");
                refetch();
            } else{
                toast.error(data.message);
            }
        })
    }

    // console.log(data.emailVerified);

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
                    
                    <div className='flex justify-center items-center gap-6'>
                        <div><button onClick={handleCompare}><FaArrowsRotate size={30} style={{ marginTop: '8', color: "#475569",}}/></button></div>
                        {
                            quantity !== '0' || quantity == 'NaN'?  <div className="card-actions">
                                <label htmlFor='booking-modal' className="btn btn-info uppercase" onClick={() => {
                                    refetch()
                                    setDesireProduct(product)}}>Book Now</label>  
                            </div> : <EmptyProductButton></EmptyProductButton>
                        }
                        <div><button onClick={handleFavourite}><FaHeart size={30} style={{ marginTop: '8', color: "#475569",}}/></button></div>
                    </div>
                    

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