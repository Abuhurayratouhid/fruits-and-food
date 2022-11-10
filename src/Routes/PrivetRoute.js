import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contaxt/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-600 ml-[50%] "></div>
    }
    if(user){

        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivetRoute;