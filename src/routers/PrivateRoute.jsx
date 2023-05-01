import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
  const {user,loading} = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Spinner animation="border" variant="secondary" />;
  }

  if (user) {
    return children;
  }
  else{

    return <Navigate to = "/login" state={{from : location}} replace></Navigate>;
  }
};

export default PrivateRoute;