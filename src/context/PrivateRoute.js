import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  if (loading) {
    return <div>isLoading</div>
  }

  if (user && user.uid) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace />
}


export default PrivateRoute;