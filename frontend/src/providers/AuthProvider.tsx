import React, { createContext, ReactNode, useContext, useState } from 'react';

interface NewUser {
  username: string;
  email: string;
  password: string;
}

interface AuthContextProps {
  authed: boolean;
  user: NewUser;
  signin: (user: NewUser, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const authContext = createContext<AuthContextProps>(null!);

export const useAuth = () => useContext(authContext);

const authProvider = ({ children }: { children: ReactNode }) => {
  const [authed, setAuthed] = useState(false);
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const signin = (newUser: NewUser, callback: VoidFunction) => {
    setAuthed(true);
    setUser(newUser);
    callback();
  };

  const signout = (callback: VoidFunction) => {
    setAuthed(false);
    setUser({ username: '', email: '', password: '' });
    callback();
  };

  const value = { authed, user, signin, signout };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default authProvider;