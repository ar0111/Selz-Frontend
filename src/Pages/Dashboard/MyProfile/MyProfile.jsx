import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import blank_pic from '../../../assets/images/blank_pic.webp';
import { ImGift } from 'react-icons/im';

const MyProfile = () => {

    const {user} = useContext(AuthContext);
    const [data, setData] = useState({});

    // console.log(user);

    useEffect(()=>{
        if(user?.email){
            fetch(`http://localhost:3000/desieruser/${user?.email}`)
                .then(res=>res.json())
                .then(data=>{
                    // console.log(data);
                    setData(data);
                })
        }
    },[user?.email])

    // console.log(data);

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-6'>My Profile</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div>
                    {data.image? <img className='w-auto h-auto rounded-full' src={`data:image/png;base64,${data.image}`} alt="" /> : <img className='w-auto h-auto rounded-full' src={blank_pic}></img>}
                </div>

                <div className='col-span-2 py-10 md:p-16 text-3xl md:text-lg'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <div>
                            <h1 className='mb-2 font-bold'>Full Name:</h1>
                            <h1>{data.name}</h1>
                        </div>
                        <div>
                            <h1 className='mb-2 font-bold'>Email Address:</h1>
                            <h1>{data.email}</h1>
                        </div>
                        <div>
                            <h1 className='mb-2 font-bold'>Primary Role:</h1>
                            {data.primaryRole === 'admin' ? <h1>data.primaryRole</h1> : <h1>NA</h1>}
                        </div>
                        <div>
                            <h1 className='mb-2 font-bold'>Secondary Role:</h1>
                            <h1>{data.role}</h1>
                        </div>

                        {
                            data.ContactNumber ? <div>
                                <h1 className='mb-2 font-bold'>Phone Number:</h1>
                                <h1>{data.ContactNumber}</h1>
                            </div> : ''
                        }
                        {
                            data.dateOfBirth ? <div>
                                <h1 className='mb-2 font-bold'>Date of Birth:</h1>
                                <h1>{data.dateOfBirth}</h1>
                            </div> : ''
                        }
                        {
                            data.address ? <div>
                                <h1 className='mb-2 font-bold'>Address:</h1>
                                <h1>{data.address}</h1>
                            </div> : ''
                        }
                        {
                            data.location ? <div>
                                <h1 className='mb-2 font-bold'>Location:</h1>
                                <h1>{data.location}</h1>
                            </div> : ''
                        }
                        
                    </div>
                </div>
                
            </div>
            
            <div className='mt-10 md:mt-40'>
                <Link to={`/dashboard/edit-profile/${data._id}`}><button className='btn btn-info uppercase px-20 text-lg'>Edit Profile</button></Link>
            </div>
            
        </div>
    );
};

export default MyProfile;