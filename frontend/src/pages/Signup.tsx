import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

const Signup = () => {
  const style = {
    border: '3px solid red'
  };
  const [nameStyle, setNameStyle] = useState({});
  const [emailStyle, setEmailStyle] = useState({});
  const [passwordStyle, setPasswordStyle] = useState({});

  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const { signin, authed } = useAuth();

  // Check if user already exist (backend?)

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, email, password } = newUser;

    !username ? setNameStyle(style) : setNameStyle({});
    !email ? setEmailStyle(style) : setEmailStyle({}); 
    !password ? setPasswordStyle(style) : setPasswordStyle({});

    if (username && email && password) {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/api/v1/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
          credentials: 'include',
        });

        await response.json();

        signin(newUser, () => navigate('/', { replace: true }));
        console.log('signin ', authed);
        
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
    <div>
      <form className="form signup" onSubmit={handleSignup}>
        <h1 className="form-title">Sign up</h1>
        <label className="form-label">Username</label>
        <input
          style={nameStyle}
          title="username"
          placeholder="Username"
          type="text"
          className="form-text-input"
          onChange={(e) => {
            setNewUser({
              ...newUser,
              username: e.target.value,
            });
          }}
        />
        <label className="form-label">Email</label>
        <input
          style={emailStyle}
          title="email"
          placeholder="Email"
          type="email"
          className="form-text-input"
          onChange={(e) => {
            setNewUser({
              ...newUser,
              email: e.target.value,
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
            setNewUser({
              ...newUser,
              password: e.target.value,
            });
          }}
        />
        <div className="form-footer">
          <button className="form-btn" type='submit'>Submit</button>
          <a href="/login">Already have an account? Login!</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
