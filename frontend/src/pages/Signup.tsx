import React from 'react';

const Signup = () => {
  return (
    <div>
      <form>
        <input title='username' placeholder='Username' type='text' />
        <input title='email' placeholder='Email' type='text' />
        <input title='password' placeholder='Password' type='text' />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Signup;