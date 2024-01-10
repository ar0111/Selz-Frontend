import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ProductCard = ({product, refetch}) => {
    const {name, price, condition, seller, email, phone, location, description, year, image, category, id, quantity} = product;
    // console.log(product);

    const deleteProduct = () =>{
        const agree = window.confirm(`Are you want to delete ${name}`);
        if(agree){
            // console.log("Yes Agree");
            fetch(`http://localhost:3000/myproducts/${category}/${id}`, {
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.acknowledged){
                    toast.success("Delete Product Successfully")
                    refetch();
                }
            })
        }
    }
    
    return (
        <div>
            <div className="card w-auto bg-base-100 shadow-xl overflow-hidden">
                <figure><img className='w-auto h-48' src={`data:image/png;base64,${image}`} alt={name} /></figure>
                <div className="card-body  overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Product Category:</th>
                                    <td>{category}</td>
                                </tr>
                                <tr>
                                    <th>Product Name:</th>
                                    <td>{name}</td>
                                </tr>
                                <tr>
                                    <th>Price:</th>
                                    <td>${price}</td>
                                </tr>
                                <tr>
                                    <th>Quantity:</th>
                                    <td>{
                                        quantity !=='0'? quantity : <p className='uppercase text-red font-bold text-lg'>Sold Out</p>
                                    }</td>
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
                                    <th>Seller Email:</th>
                                    <td>{email}</td>
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
                                    <th>Description:</th>
                                    <td>{description}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-actions justify-around mt-6">
                        <Link to={`/dashboard/update/${category}/${id}`}><button className="btn btn-info uppercase px-10">Update</button></Link>
                        <button onClick={()=> deleteProduct()} className="btn btn-info uppercase px-10">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;