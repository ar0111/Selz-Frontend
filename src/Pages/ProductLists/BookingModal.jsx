import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({desireProduct, setDesireProduct, refetch}) => {
    console.log(desireProduct);

    const {user} = useContext(AuthContext);
    console.log(user.displayName);
    const {name, price, category, id, quantity, image, seller, phone} = desireProduct;

    const handleBooking = (event)=> {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        // console.log(name);
        const price = form.price.value;
        // console.log(typeof(parseInt(price)));
        const buyer = form.buyer.value;
        const email = form.email.value;
        const number = form.number.value;
        const location = form.location.value;

        const booking = {
            productName: name,
            productPrice: price,
            buyerName: buyer,
            buyerEmail: email,
            contactNumber: number,
            location,
            image, seller,
            sellercontact: phone,
            productID: id,
            productCategory: category
        }

        fetch('https://selz-server.vercel.app/bookings',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                setDesireProduct(null);
                toast.success("Booking Confirmed!");
                refetch();
            }
        })

        const updatedProduct = {
            quantity
        }

        fetch(`https://selz-server.vercel.app/updateproduct/${category}/${id}`, {
        method: 'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data => {
        })


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-accent text-white">✕</label>
                    <h3 className="text-lg font-bold text-left -mt-4"></h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Product Name:</span>
                            </label>
                            <input name='name' type="text" placeholder="Product Name" className="input input-bordered" required defaultValue={name} disabled />
                            
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Product Price:</span>
                            </label>
                            <input name='price' type="number" placeholder="Product Price" className="input input-bordered" required defaultValue={price} disabled />
                            
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Buyer Name:</span>
                            </label>
                            <input name='buyer' type="text" placeholder="Buyer Name" className="input input-bordered" required defaultValue={user.displayName} disabled />
                            
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Buyer Email:</span>
                            </label>
                            <input name='email' type="text" placeholder="Buyer Email" className="input input-bordered" required defaultValue={user.email} disabled />
                            
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Contact Number:</span>
                            </label>
                            <input type="text" placeholder="Contact Number" name="number" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Meeting Location:</span>
                            </label>
                            <input type="text" placeholder="Meeting Location" name="location" className="input input-bordered" required />
                        </div>

                        
                        <br />
                        <input className='btn btn-accent w-full -mt-3' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;