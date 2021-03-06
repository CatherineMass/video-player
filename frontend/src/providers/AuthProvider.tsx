import React, { createContext, ReactNode, useContext, useState } from 'react';

interface NewUser {
  username: string;
  email: string;
  password: string;
}

interface AuthContextProps {
  user: NewUser;
  signin: (token: string, user: NewUser, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const authContext = createContext<AuthContextProps>(null!);

export const useAuth = () => useContext(authContext);

const authProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const signin = (token: string, newUser: NewUser, callback: VoidFunction) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('username', newUser.username);
    setUser(newUser);
    callback();
  };

  const signout = (callback: VoidFunction) => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    setUser({ username: '', email: '', password: '' });
    callback();
  };

  const value = { user, signin, signout };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default authProvider;