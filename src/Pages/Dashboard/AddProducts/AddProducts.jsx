import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Components/Loading';
import { v4 as uuidv4 } from 'uuid';

const AddProducts = () => {
    const ID = uuidv4();
    // console.log(ID);

    const {user} = useContext(AuthContext);
    // console.log(user);
    const {register, handleSubmit, reset, formState: { errors }} = useForm();

    const { data: categories = [], refetch, isLoading } = useQuery({
        queryKey: ['categoryname'],
        queryFn: async()=>{
            const res = await fetch("http://localhost:3000/categoryname");
            const data = await res.json();
            return data;
        }
    })

    if(isLoading) return <Loading></Loading>

    const handleAddProducts = (data, event) =>{
        event.preventDefault();
        // console.log(event.target.role.value);
        // console.log(event.target.id.value, data.quantity);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('condition', data.condition);
        formData.append('seller', event.target.seller.value);
        formData.append('email', event.target.email.value);
        formData.append('phone', data.phone);
        formData.append('location', data.location);
        formData.append('category', event.target.category.value);
        formData.append('description', data.description);
        formData.append('year', data.year);
        formData.append('id', event.target.id.value);
        formData.append('quantity', data.quantity);
        // console.log(formData);

        fetch('http://localhost:3000/addproducts',{
            method: 'PUT',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                toast.success('Product Added Successfully')
                reset();
            }
        })
        .catch(err => console.log("Selz Error ",err))
    }

    return (
        <div className='w-auto p-3 shadow-2xl rounded-lg'>
            <h1 className='px-8 font-semibold text-xl text-center'>Add A Product</h1>
            <form onSubmit={handleSubmit(handleAddProducts)}>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 p-6'>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product ID:</span>
                            </label>
                            <input {...register("id")} type="text" placeholder="Product ID" className="input input-bordered" required defaultValue={ID} disabled />
                            {errors.id && <p className='text-red'>{errors.id.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="Product Name" className="input input-bordered" required />
                            {errors.name && <p className='text-red'>{errors.name.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input {...register("price")} type="number" placeholder="Product Price" className="input input-bordered" min={0} required />
                            {errors.price && <p className='text-red'>{errors.price.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Condition</span>
                            </label>
                            <input {...register("condition")} type="text" placeholder="Product Condition" className="input input-bordered" required />
                            {errors.condition && <p className='text-red'>{errors.condition.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input {...register("seller")} type="text" placeholder="Seller Name" className="input input-bordered" defaultValue={user?.displayName} disabled />
                            {errors.seller && <p className='text-red'>{errors.seller.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input {...register("email")} type="text" placeholder="Seller Email" className="input input-bordered" defaultValue={user?.email} disabled />
                            {errors.email && <p className='text-red'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Purchased Year</span>
                            </label>
                            <input {...register("year")} type="text" placeholder="Year of Purchase" className="input input-bordered" />
                            {errors.year && <p className='text-red'>{errors.year.message}</p>}
                        </div>
                    </div>
                    
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Quantity</span>
                            </label>
                            <input {...register("quantity")} type="number" placeholder="Product Quantity" className="input input-bordered" min={0} required />
                            {errors.quantity && <p className='text-red'>{errors.quantity.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile Number</span>
                            </label>
                            <input {...register("phone")} type="text" placeholder="Mobile Number" className="input input-bordered" required />
                            {errors.phone && <p className='text-red'>{errors.phone.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input {...register("location")} type="text" placeholder="Location" className="input input-bordered" min={0} required />
                            {errors.location && <p className='text-red'>{errors.location.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select {...register("category")} className="select select-bordered w-full max-w-xs" defaultValue={"Smartphones"}>
                                {categories.map(category => <option key={category._id}>{category.name}</option>)}
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <textarea {...register("description")} type="text" placeholder="Description" className="input input-bordered px-3 py-2" rows="10" required />
                            {errors.description && <p className='text-red'>{errors.description.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input {...register("image",{
                                required: 'Photo Is Required'
                            })} type="file" placeholder="Choose a File" className="input input-bordered"/>
                            {errors.image && <p className='text-red'>{errors.image.message}</p>}

                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full form-control my-6">
                    <button className="btn btn-accent font-semibold px-full lg:px-32 text-xl">Add Product</button>   
                </div>
            </form>
        </div>
    );
};

export default AddProducts;