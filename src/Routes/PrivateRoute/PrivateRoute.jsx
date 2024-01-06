import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../../Components/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from:location}}></Navigate>
};

export default PrivateRoute;