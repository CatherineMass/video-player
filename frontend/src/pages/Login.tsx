import React from 'react';

const Login = () => {
  return (
    <form className='form login'>
      <label className='form-label'>Username</label>
      <input title='username' placeholder='Username' type='text' className='form-text-input' />
      <label className='form-label'>Password</label>
      <input title='password' placeholder='Password' type='text' className='form-text-input' />
      <button>Submit</button>
    </form>
  );
};

export default Login;