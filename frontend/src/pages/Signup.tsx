import React from 'react';

const Signup = () => {
  return (
    <div>
      <form className='form signup'>
        <h1 className='form-title'>Sign up</h1>
        <label className='form-label'>Username</label>
        <input title='username' placeholder='Username' type='text' className='form-text-input' />
        <label className='form-label'>Email</label>
        <input title='email' placeholder='Email' type='text' className='form-text-input' />
        <label className='form-label'>Password</label>
        <input title='password' placeholder='Password' type='text' className='form-text-input' />
        <div className='form-footer'>
          <button className='form-btn'>Submit</button>
          <a href='/login'>Already have an account? Login!</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;