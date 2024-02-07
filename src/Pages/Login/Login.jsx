import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Login = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const {signIn, user, forgetPassword} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (data)=>{
        setUserEmail(data.email);
        setLoginError('');
        signIn(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            toast.success('User Login Successfully');
            if(user.emailVerified){
                fetch(`https://selz-server.vercel.app/users/${data.email}`,{
                    method: 'PUT',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify({user})
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                })
            }
            navigate(from), {replace:true};
        })
        .catch(error=>{
            console.log(error);
            setLoginError(error.message);
        })
    }

    const handleForgetPassword = (data, event)=>{
        if(!userEmail){
            toast.error("Please Enter Your Email Address");
            return;
        }

        forgetPassword(userEmail)
        .then(()=>{
            toast.success("Please Check Your email and reset Your Password.")
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            
            <div className='w-96 p-3 shadow-2xl rounded-lg'>
                <h1 className='text-center font-semibold text-xl'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")}
                            onBlur = {(e) => setUserEmail(e.target.value)}
                            type="email" placeholder="Email" className="input input-bordered" required />
                        {errors.email && <p className='text-red'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password")} type="password" placeholder="Password" className="input input-bordered" required />
                        {errors.password && <p className='text-red'>{errors.password.message}</p>}

                        {
                            loginError && <p className='text-red'>{loginError}</p>
                        }
                    </div>

                    <div className="form-control mt-6">
                        <div className='flex justify-center gap-10'>
                            <button className="btn btn-neutral font-semibold px-10 rounded-full">Login</button>
                            <Link to='/signup'><button className="btn btn-warning font-semibold rounded-full px-8">Sign Up</button></Link>
                        </div>
                        
                    </div>

                    <div className='divider'>OR</div>
                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </form>

                <label className="label justify-center pt-0 pb-6">
                    <button onClick={handleForgetPassword} className="label-text-alt link link-hover text-lg font-semibold">Forgot password?</button>
                </label>
            </div>
        </div>
    );
};

export default Login;


