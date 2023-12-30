import React from 'react';

const ProductPage = ({product}) => {
    const {name, price, condition, seller, email, phone, location, description, year, image} = product;
    console.log(product);
    return (
        <div>
            <div className="card w-auto bg-base-100 shadow-xl overflow-hidden">
                <figure><img className='w-auto h-48' src={`data:image/png;base64,${image}`} alt={name} /></figure>
                <div className="card-body  overflow-hidden">
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
                                    <td>{seller}</td>
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
                            </tbody>
                        </table>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-info">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;