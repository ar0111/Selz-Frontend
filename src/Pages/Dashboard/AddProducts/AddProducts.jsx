import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProducts = () => {

    const {user} = useContext(AuthContext);
    console.log(user);
    const {register, handleSubmit, reset, formState: { errors }} = useForm();

    const handleAddProducts = (data) =>{
        console.log(data);
        // const image = data.image[0];
        // const formData = new FormData();
        // formData.append('image', image);
        // formData.append('name', data.name);
        // // console.log(formData);

        // fetch('http://localhost:3000/addcategories',{
        //     method: 'POST',
        //     body:formData
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     if(data.insertedId){
        //         toast.success('Category Added Successfully')
        //         reset();
        //     }
        // })
        // .catch(err => console.log("Selz Error ",err))
    }

    return (
        <div className='w-96 p-3 shadow-2xl rounded-lg'>
            <h1 className='px-8 font-semibold text-xl'>Add A Product</h1>
            <form onSubmit={handleSubmit(handleAddProducts)} className="card-body">

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
                    <input {...register("price", {
                        pattern:{value:/[0-9]*/}
                    })} type="number" placeholder="Product Price" className="input input-bordered" min={0} required />
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
                    <input {...register("seller")} type="text" placeholder="Seller Name" className="input input-bordered" defaultValue={user.displayName} disabled />
                    {errors.seller && <p className='text-red'>{errors.seller.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <input {...register("email")} type="text" placeholder="Seller Email" className="input input-bordered" defaultValue={user.email} disabled />
                    {errors.email && <p className='text-red'>{errors.email.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Mobile Number</span>
                    </label>
                    <input {...register("phone")} type="text" placeholder="Mobile Number" className="input input-bordered" min={0} required />
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
                        <span className="label-text">Select Your Role</span>
                    </label>
                    <select {...register("role")} className="select select-bordered w-full max-w-xs" defaultValue={"Buyer"}>
                        <option>Seller</option>
                        <option>Buyer</option>
                    </select>
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

                <div className="form-control mt-6">
                    <button className="btn btn-accent font-semibold px-8">Add Product</button>   
                </div>
            </form>
        </div>
    );
};

export default AddProducts;