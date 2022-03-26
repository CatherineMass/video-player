import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const { authed } = useAuth();

  return authed === true ? children : <Navigate to='/login' state={{ from: location }} replace />;

  // if(!JSON.parse(localStorage?.isLoggedIn || false)) {
  //   return <Navigate to='/login' replace />;
  // }
  // return children;
};

export default RequireAuth;