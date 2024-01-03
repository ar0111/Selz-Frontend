import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const SignUp = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const {createUser, updateUser, verifyEmail} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (data)=>{
        console.log(data);
        createUser(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user.emailVerified);
            toast.success('User Created Successfully');
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{
                saveUser(data.name, data.email, data.role, user.emailVerified)
            })
            .catch(err=>console.log(err))

            verifyEmail()
            .then(()=>{
                toast("Please check your email to verify")
            })
        })
        .catch(error=>{
            console.log(error);
            setSignUpError(error.message);
        })
    }

    const saveUser = (name, email, role, emailVerified)=>{
        if(name.toLowerCase() === 'admin') role = 'admin';
        const user = {name, email, role:role, emailVerified};

        fetch('http://localhost:3000/users',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            navigate('/login');
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            
            <div className='w-96 p-3 shadow-2xl rounded-lg'>
                <h1 className='text-center font-semibold text-xl'>Create Account</h1>
                <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name")} type="text" placeholder="Name" className="input input-bordered" required />
                        {errors.name && <p className='text-red'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")} type="email" placeholder="Email" className="input input-bordered" required />
                        {errors.email && <p className='text-red'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password",{
                            required: 'Password is Required',
                            minLength:{value:6, message:'Password must be 6 characters long'},
                            pattern:{value:/(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*])/, message:"Password must have uppercase, special chracter and number"}
                        })} type="password" placeholder="Password" className="input input-bordered" required />
                        {errors.password && <p className='text-red'>{errors.password.message}</p>}
                    </div>

                    <label className="label">
                        <span className="label-text">Select Your Role</span>
                    </label>
                    <select {...register("role")} className="select select-bordered w-full max-w-xs" defaultValue={"Buyer"}>
                        <option>Seller</option>
                        <option>Buyer</option>
                    </select>

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral font-semibold text-base">Register Your Account</button>
                    </div>

                    {
                        signUpError && <p className='text-red'>{signUpError}</p>
                    }

                    <p>Already Have an Account? <Link className='text-secondary' to='/login'>Please Sign In</Link></p>

                    <div className='divider'>OR</div>
                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;