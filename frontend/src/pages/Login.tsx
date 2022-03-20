import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  console.log(user);
  

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
