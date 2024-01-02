import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateProduct = ({category, id}) => {
    const desireProduct = useLoaderData();
    // console.log(desireProduct[0].category);

    const {register, handleSubmit, reset, formState: { errors }} = useForm();

    const handleUpdateProducts = (data)=>{

        const updatedProduct = {
            quantity: data.quantity,
            price: data.price
        }

        fetch(`http://localhost:3000/update/${desireProduct[0].category}/${desireProduct[0].id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
            })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    toast.success('Product Updated Successfully')
                    reset();
                }
            })
    }

    return (
        <div className='container mx-auto my-10'>
            <div className='flex justify-center items-center'>
                <div className='w-auto p-3 shadow-2xl rounded-lg'>
                    <h1 className='px-8 font-semibold text-xl text-center'>Update Product</h1>
                    <form onSubmit={handleSubmit(handleUpdateProducts)}>

                        <div className="form-control my-4">
                            <label className="label">
                                <span className="label-text">Updated Quantity</span>
                            </label>
                            <input {...register("quantity")} type="number" placeholder="Update Quantity" className="input input-bordered" min={0} />
                            {errors.quantity && <p className='text-red'>{errors.quantity.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Updated Price</span>
                            </label>
                            <input {...register("price")} type="number" placeholder="Product Price" className="input input-bordered" min={0} />
                            {errors.price && <p className='text-red'>{errors.price.message}</p>}
                        </div>

                        <div className="flex justify-center items-center w-full form-control my-6">
                            <button className="btn btn-accent font-semibold px-full lg:px-32 text-xl">Update Product</button>   
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
        
    );
};

export default UpdateProduct;