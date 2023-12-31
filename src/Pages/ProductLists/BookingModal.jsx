import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({desireProduct}) => {
    // console.log(desireProduct);

    const {user} = useContext(AuthContext);
    console.log(user.displayName);
    const {name, price} = desireProduct;

    const handleBooking = (event)=> {
        event.preventDefault();
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
                            <input type="text" placeholder="Product Name" className="input input-bordered" required defaultValue={name} disabled />
                            
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Product Price:</span>
                            </label>
                            <input type="number" placeholder="Product Price" className="input input-bordered" required defaultValue={price} disabled />
                            
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Buyer Name:</span>
                            </label>
                            <input type="text" placeholder="Buyer Name" className="input input-bordered" required defaultValue={user.displayName} disabled />
                            
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Buyer Email:</span>
                            </label>
                            <input type="text" placeholder="Buyer Email" className="input input-bordered" required defaultValue={user.displayName} disabled />
                            
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