import React from 'react';

const Form = () => {
  return (
    <form className='modal-form'>
      <label>Name</label>
      <input placeholder='Name'/>
      <label>Email</label>
      <input placeholder='Email'/>
      <label>Center</label>
      <input placeholder='Center'/>
    </form>
  );
};

export default Form;