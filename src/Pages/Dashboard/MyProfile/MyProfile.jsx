import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { Link } from 'react-router-dom';

const MyProfile = () => {

    const {user} = useContext(AuthContext);
    const [data, setData] = useState({});

    useEffect(()=>{
        if(user?.email){
            fetch(`http://localhost:3000/desieruser/${user?.email}`)
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    setData(data);
                })
        }
    },[user?.email])

    // console.log(data);

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-6'>My Profile</h1>
            <div className='grid grid-cols-3'>
                <div>
                    <h1 className='mb-2'>Full Name:</h1>
                    <h1>{data.name}</h1>
                </div>
                <div>
                    <h1 className='mb-2'>Email Address:</h1>
                    <h1>{data.email}</h1>
                </div>
                <div>
                    <h1 className='mb-2'>Role:</h1>
                    <h1>{data.role}</h1>
                </div>
                
            </div>

            <div className='mt-40'>
                <Link to='/dashboard/edit-profile'><button className='btn btn-info uppercase px-20 text-lg'>Edit Profile</button></Link>
            </div>
            
        </div>
    );
};

export default MyProfile;