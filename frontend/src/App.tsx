import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthProvider from './providers/AuthProvider';
import RequireAuth from './providers/RequireAuth';

interface Props {
  children?: JSX.Element;
}

const App: React.FC<Props> = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <RequireAuth>
            <Route path='/' element={<App />} />
          </RequireAuth>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;