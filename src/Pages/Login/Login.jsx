import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Login = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const {signIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (data)=>{
        // console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            toast.success('User Login Successfully');
            navigate(from), {replace:true};
        })
        .catch(error=>{
            console.log(error);
            setLoginError(error.message);
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
                        <input {...register("email")} type="email" placeholder="Email" className="input input-bordered" required />
                        {errors.email && <p className='text-red'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password")} type="password" placeholder="Password" className="input input-bordered" required />
                        {errors.password && <p className='text-red'>{errors.password.message}</p>}

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-sm font-semibold">Forgot password?</a>
                        </label>

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
            </div>
        </div>
    );
};

export default Login;


