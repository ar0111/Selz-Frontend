import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)

    return (
        <div className='h-[800px] flex justify-center items-center'>
            
            <div className='w-96 p-3 shadow-2xl rounded-lg'>
                <h1 className='text-center font-semibold text-xl'>Create Account</h1>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
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
                    </div>

                    <label className="label">
                            <span className="label-text">Select Your Role</span>
                    </label>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Role</option>
                        <option>Seller</option>
                        <option>Buyer</option>
                    </select>

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral font-semibold text-base">Register Your Account</button>
                    </div>

                    <p>Already Have an Account? <Link className='text-secondary' to='/login'>Please Sign In</Link></p>

                    <div className='divider'>OR</div>
                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;