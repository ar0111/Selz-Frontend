import React, { useContext, useEffect, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../../Components/Loading';
import useAdmin from '../../Hooks/useAdmin';

const AdminBuyerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const [data, setData] = useState({});
    const location = useLocation();

    useEffect(()=>{
        if(user?.email){
            fetch(`https://selz-server.vercel.app/users/${user?.email}`)
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    setData(data);
                })
        }
    },[user?.email])
    
    if(loading || isAdminLoading){
        return <Loading></Loading>
    }

    if(user && (isAdmin || data.role === 'Buyer')){
        return children;
    }

    return <Navigate to='/' state={{from:location}}></Navigate>
};

export default AdminBuyerRoute;