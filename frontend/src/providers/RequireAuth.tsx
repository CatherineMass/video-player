import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { authed } = useAuth();

  return authed === true ? children : <Navigate to='/login' replace />;

  // if(!JSON.parse(localStorage?.isLoggedIn || false)) {
  //   return <Navigate to='/login' replace />;
  // }
  // return children;
};

export default RequireAuth;