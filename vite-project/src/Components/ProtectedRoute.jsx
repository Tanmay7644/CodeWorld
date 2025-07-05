import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({children,allowedRoles}) => {
    const token=localStorage.getItem("token");

    if(!token){
        return <Navigate to="/login" replace />;
    }
    let payload;
    try {
        payload = JSON.parse(atob(token.split('.')[1]));
    } catch {
        return <Navigate to="/login" replace />;
    }
    if (!allowedRoles.includes(payload.role)) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default ProtectedRoute
