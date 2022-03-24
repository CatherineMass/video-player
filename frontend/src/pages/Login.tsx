import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    email: null,
    password: '',
  });
  const navigate = useNavigate();
  const auth = useAuth();
  const [error, setError] = useState();
  
  const loginHandler = async (e: MouseEvent) => {
    e.preventDefault();

    const { username, password } = user;

    if (username && password) {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/api/v1/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
          credentials: 'include',
        });

        const data = await response.json();
        if (response.status === 401) {
          setError(data.message);
          localStorage.setItem('isLoggedin', 'false');
          throw new Error(data.message);
        }

        auth.signin(user, () => navigate('/'));
        
      } catch (err) {
        console.log(err);
      }}
  };

  useEffect(() => {
    const checkLogin = () => {
      if (JSON.parse(localStorage?.isLoggedin || false)) {
        navigate('/');
      }
    };
    checkLogin();
  }, []);

  return (
    <form className="form login">
      <h1 className="form-title">Login</h1>
      <label className="form-label">Username</label>
      <input
        title="username"
        placeholder="Username"
        type="text"
        className="form-text-input"
        onChange={(e) => {
          setUser({
            ...user,
            username: e.target.value,
          });
        }}
      />
      <label className="form-label">Password</label>
      <input
        title="password"
        placeholder="Password"
        type="password"
        className="form-text-input"
        onChange={(e) => {
          setUser({
            ...user,
            password: e.target.value,
          });
        }}
      />
      <div className="form-footer">
        <button className="form-btn">Submit</button>
        <a href="/signup">No account yet? Sign up!</a>
      </div>
    </form>
  );
};

export default Login;
