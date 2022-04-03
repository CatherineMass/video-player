import React from 'react';
import { AppProps } from '../../AppProps';

interface Props {
  handleModalOff: AppProps['noParamVoid'];
}

const Form: React.FC<Props> = ({ handleModalOff }) => {
  return (
    <form className='modal-form'>
      <label>Name</label>
      <input placeholder='Name'/>
      <label>Email</label>
      <input placeholder='Email'/>
      <label>Center</label>
      <input placeholder='Center'/>
      <div className="modal-form-footer">
        <button type='submit'>Submit</button>
        <button type='button' onClick={handleModalOff}>Cancel</button>
      </div>
    </form>
  );
};

export default Form;