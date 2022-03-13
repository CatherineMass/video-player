import React from 'react';

const Signup = () => {
  return (
    <div>
      <form className='form signup'>
        <label className='form-label'>Username</label>
        <input title='username' placeholder='Username' type='text' className='form-text-input' />
        <label className='form-label'>Email</label>
        <input title='email' placeholder='Email' type='text' className='form-text-input' />
        <label className='form-label'>Password</label>
        <input title='password' placeholder='Password' type='text' className='form-text-input' />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Signup;