import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

const Login = () => {
  const style = {
    border: '3px solid red'
  };
  const [nameStyle, setNameStyle] = useState({});
  const [passwordStyle, setPasswordStyle] = useState({});

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const { signin, authed } = useAuth();
  const [error, setError] = useState();
  
  const loginHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { username, password } = user;

    !username ? setNameStyle(style) : setNameStyle({});
    !password ? setPasswordStyle(style) : setPasswordStyle({});

    if (username && password) {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/api/v1/log`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
          credentials: 'include',
        });

        const data = await response.json();
        if (response.status === 401) {
          setError(data.message);
          throw new Error(data.message);
        }

        signin(user, () => navigate('/', { replace: true }));
        console.log('login ', authed);
        
      } catch (err) {
        console.log(err);
      }}
  };

  useEffect(() => {
    const checkLogin = () => {
      if (authed) {
        navigate('/');
      }
    };
    checkLogin();
  }, []);

  return (
    <form className="form login">
      <h1 className="form-title">Login</h1>
      {error && alert({error})}
      <label className="form-label">Username</label>
      <input
        style={nameStyle}
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
        style={passwordStyle}
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
        <button className="form-btn" type='submit' onClick={loginHandler}>Submit</button>
        <a href="/signup">No account yet? Sign up!</a>
      </div>
    </form>
  );
};

export default Login;
