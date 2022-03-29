import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

const Signup = () => {
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
  const [emailValidation, setEmailValidation] = useState(initialValidationState);
  const [passwordValidation, setPasswordValidation] = useState(initialValidationState);

  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const { signin } = useAuth();

  // Check if user already exist (backend?)

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, email, password } = newUser;

    // Validation
    !username ? setNameValidation(invalidState) : setNameValidation(initialValidationState);
    !email ? setEmailValidation(invalidState) : setEmailValidation(initialValidationState);
    !password ? setPasswordValidation(invalidState) : setPasswordValidation(initialValidationState);

    if (username && email && password) {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/api/v1/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
          credentials: 'include',
        });

        const data = await response.json();

        signin(data.token, newUser, () => navigate('/', { replace: true }));
        
      } catch (err) {
        console.log(err);
      }}
  };

  useEffect(() => {
    const checkLogin = () => {
      if (sessionStorage?.token) {
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
          style={nameValidation.style}
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
        { nameValidation.invalid && <p className='invalid-input'>This field is required.</p> }
        <label className="form-label">Email</label>
        <input
          style={emailValidation.style}
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
        { emailValidation.invalid && <p className='invalid-input'>This field is required.</p> }
        <label className="form-label">Password</label>
        <input
          style={passwordValidation.style}
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
        { passwordValidation.invalid && <p className='invalid-input'>This field is required.</p> }
        <div className="form-footer">
          <button className="form-btn" type='submit'>Submit</button>
          <a href="/login">Already have an account? Login!</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
