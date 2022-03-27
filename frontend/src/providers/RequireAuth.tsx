import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();

  return JSON.parse(localStorage?.authed) ? children : <Navigate to='/login' state={{ from: location }} replace />;
};

export default RequireAuth;