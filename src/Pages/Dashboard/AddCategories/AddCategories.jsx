import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddCategories = () => {
    const {register, handleSubmit, reset, formState: { errors }} = useForm();

    const handleAddCategories = (data) =>{
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', data.name);
        // console.log(formData);

        fetch('http://localhost:3000/addcategories',{
            method: 'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success('Category Added Successfully')
                reset();
            }
        })
        .catch(err => console.log("Selz Error ",err))
    }

    return (
       
        <div className='w-96 p-3 shadow-2xl rounded-lg'>
            <h1 className='px-8 font-semibold text-xl'>Add A Category</h1>
            <form onSubmit={handleSubmit(handleAddCategories)} className="card-body">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name")} type="text" placeholder="Category Name" className="input input-bordered" required />
                    {errors.name && <p className='text-red'>{errors.name.message}</p>}
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
                    <button className="btn btn-accent font-semibold px-8">Add Category</button>   
                </div>
            </form>
        </div>
        
    );
};

export default AddCategories;