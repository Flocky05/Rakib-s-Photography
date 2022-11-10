import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexs/AuthProvider/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const { pathname } = useLocation();
    if (loading) return <>loading</>
    if (user?.uid) return children
    return <Navigate to='/signin' replace state={pathname}>

    </Navigate>
};

export default PrivetRoute;