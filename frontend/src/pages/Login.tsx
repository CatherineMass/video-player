import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

const Login = () => {
  // Validation
  const initialValidationState = {
    style: {},
    invalid: false,
  };
  const invalidState = {
    style: {
      border: '3px solid red'
    },
    invalid: true,
  };
  const [nameValidation, setNameValidation] = useState(initialValidationState);
  const [passwordValidation, setPasswordValidation] = useState(initialValidationState);

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

    // Validation
    !username ? setNameValidation(invalidState) : setNameValidation(initialValidationState);
    !password ? setPasswordValidation(invalidState) : setPasswordValidation(initialValidationState);

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
          throw new Error(data.message);
        }

        signin(data.token, user, () => navigate('/', { replace: true }));
        
      } catch (err) {
        console.log(err);
      }}
  };

  // const token = sessionStorage.getItem('token');
  // console.log(sessionStorage?.token);

  // useEffect(() => {
  //   const checkLogin = () => {
  //     if (sessionStorage?.token ==! undefined) {
  //       navigate('/');
  //     }
  //   };
  //   checkLogin();
  // }, []);

  return (
    <form className="form login">
      <h1 className="form-title">Login</h1>
      {error && alert({error})}
      <label className="form-label">Username</label>
      <input
        style= {nameValidation.style}
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
      { nameValidation.invalid && <p className='invalid-input'>This field is required.</p> }
      <label className="form-label">Password</label>
      <input
        style={passwordValidation.style}
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
      { passwordValidation.invalid && <p className='invalid-input'>This field is required.</p> }
      <div className="form-footer">
        <button className="form-btn" type='submit' onClick={loginHandler}>Submit</button>
        <a href="/signup">No account yet? Sign up!</a>
      </div>
    </form>
  );
};

export default Login;
