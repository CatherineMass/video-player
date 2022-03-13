import React from 'react';

const Login = () => {
  return (
    <form className='form login'>
      <h1 className='form-title'>Login</h1>
      <label className='form-label'>Username</label>
      <input title='username' placeholder='Username' type='text' className='form-text-input' />
      <label className='form-label'>Password</label>
      <input title='password' placeholder='Password' type='text' className='form-text-input' />
      <div className='form-footer'>
        <button className='form-btn'>Submit</button>
        <a href='#'>No account yet? Sign up!</a>
      </div>
    </form>
  );
};

export default Login;