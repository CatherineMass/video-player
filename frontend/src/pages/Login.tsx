import React from 'react';

const Login = () => {
  return (
    <form>
      <input title='username' placeholder='Username' type='text' />
      <input title='password' placeholder='Password' type='text' />
      <button>Submit</button>
    </form>
  );
};

export default Login;