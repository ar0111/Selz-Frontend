import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ImFolderUpload } from "react-icons/im";
import { AuthContext } from '../../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const EditProfile = () => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const {register, handleSubmit, reset, formState: { errors }} = useForm();
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No File Selected");
    const [desireImage, setDesireImage] = useState(null);

    const handleEditProfile = (data)=>{
        // console.log(data);
        const formData = new FormData();

        formData.append('image', desireImage);
        formData.append('phone', data.phone);
        formData.append('date', data.birth);
        formData.append('address', data.address);
        formData.append('location', data.location);

        // console.log(formData);

        fetch(`http://localhost:3000/updateUser/${user.email}`,{
            method: 'PUT',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                toast.success('Profile Updated Successfully')
                reset();
                navigate('/dashboard')
            }
        })
        .catch(err => console.log("Selz Error ",err))
    }

    return (
        <div className='w-96 p-3 shadow-2xl rounded-lg'>
            <h1 className='px-8 font-semibold text-xl text-center'>Edit Profile</h1>
            <form onSubmit={handleSubmit(handleEditProfile)}>

                <div className='flex justify-center items-center'>
                    <div className='w-full'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <div onClick={()=>document.querySelector(".input-field").click()} className='flex justify-start items-center border-dashed border-2 cursor-pointer rounded-full w-64 h-64 border-Indigo-400 pe-2'>
                                <input {...register("image",{
                                    required: 'Photo Is Required'
                                })} type="file" accept="image/*" placeholder="Choose a File" className='input-field' hidden
                                    onChange={({target:{files}}) =>{
                                        files[0] && setFileName(files[0].name)
                                        if(files){
                                            setImage(URL.createObjectURL(files[0]));
                                            setDesireImage(files[0]);
                                        }
                                    }}
                                />
                                {errors.image && <p className='text-red'>{errors.image.message}</p>}
                                {
                                    image ? <img className='rounded-full' src={image} widht={150} height={150} alt={fileName} /> : 
                                    <>
                                        <ImFolderUpload className='mx-auto' color='cyan' size={60}></ImFolderUpload>
                                        <p>Browse File to Upload</p>
                                    </> 
                                }
                            </div>
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
                                <span className="label-text">Date of Birth</span>
                            </label>
                            <input {...register("birth")} type="date" placeholder="Mobile Number" className="input input-bordered" required />
                            {errors.birth && <p className='text-red'>{errors.birth.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input {...register("address")} type="text" placeholder="Address" className="input input-bordered" required />
                            {errors.address && <p className='text-red'>{errors.address.message}</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input {...register("location")} type="text" placeholder="Location" className="input input-bordered" required />
                            {errors.location && <p className='text-red'>{errors.location.message}</p>}
                        </div>
                    </div>
                    
                </div>

                <div className="flex justify-center items-center w-full form-control my-6">
                    <button className="btn btn-accent font-semibold px-36 text-xl">Submit</button>   
                </div>
            </form>
        </div>
    );
};

export default EditProfile;