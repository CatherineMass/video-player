import React, { createContext, ReactNode, useContext, useState } from 'react';

interface AuthContextProps {
  user: any;
  login: (user: any, callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
}

interface AuthenticationProps {
  authed: boolean | null | undefined;
  login: (callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
}

const AuthContext = createContext<AuthContextProps>(null!);
export const useAuth = () => useContext(AuthContext);

const authentication: AuthenticationProps = {
  authed: false,
  login(callback: VoidFunction) {
    localStorage.setItem('isLoggedIn', 'true');
    authentication.authed = true;
    callback();
  },
  logout(callback: VoidFunction) {
    localStorage.removeItem('isLoggedIn');
    authentication.authed = false;
    callback();
  }
};

const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [user, setUser] = useState<any>(null);

  const login = (newUser: any, callback: VoidFunction) => authentication.login(() => {
    setUser(newUser);
    callback();
  });

  const logout = (callback: VoidFunction) => authentication.logout(() => {
    setUser(null);
    callback();
  });

  const value = { user, login, logout };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;