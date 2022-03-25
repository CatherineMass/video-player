import React, { createContext, ReactNode, useContext, useState } from 'react';

interface NewUser {
  username: string;
  email: string | null;
  password: string;
}

interface AuthContextProps {
  user: NewUser;
  signin: (user: NewUser, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

interface AuthenticationProps {
  authed: boolean | null | undefined;
  signin: (callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextProps>(null!);
export const useAuth = () => useContext(AuthContext);

const authentication: AuthenticationProps = {
  authed: false,
  signin(callback: VoidFunction) {
    localStorage.setItem('isLoggedIn', 'true');
    authentication.authed = true;
    callback();
  },
  signout(callback: VoidFunction) {
    localStorage.removeItem('isLoggedIn');
    authentication.authed = false;
    callback();
  },
};

const AuthP = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<NewUser>({
    username: '',
    email: '',
    password: '',
  });

  const signin = (newUser: NewUser, callback: VoidFunction) =>
    authentication.signin(() => {
      setUser(newUser);
      callback();
    });

  const signout = (callback: VoidFunction) =>
    authentication.signout(() => {
      setUser({ username: '', email: '', password: '' });
      callback();
    });

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthP;
