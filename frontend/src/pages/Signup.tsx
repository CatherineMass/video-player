import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

const Signup = () => {
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const auth = useAuth();

  // Check if user already exist (backend?)

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, email, password } = newUser;

    if (username && email && password) {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/api/v1/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
          credentials: 'include',
        });

        await response.json();

        auth.signin(newUser, () => navigate('/'));
        
      } catch (err) {
        console.log(err);
      }}
  };

  return (
    <div>
      <form className="form signup" onSubmit={handleSignup}>
        <h1 className="form-title">Sign up</h1>
        <label className="form-label">Username</label>
        <input
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
