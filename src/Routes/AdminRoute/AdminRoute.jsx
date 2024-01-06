import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../../Components/Loading';
import useAdmin from '../../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();
    
    if(loading || isAdminLoading){
        return <Loading></Loading>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to='/' state={{from:location}}></Navigate>
};

export default AdminRoute;