import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='h-[800px] flex justify-center items-center'>
            
            <div className='w-96 p-3 shadow-2xl rounded-lg'>
                <h1 className='text-center font-semibold text-xl'>Login</h1>
                <form className="card-body">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-sm font-semibold">Forgot password?</a>
                        </label>
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


