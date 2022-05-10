import React from 'react';
import { AppProps } from '../../AppProps';

interface Props {
  handleModalOff: AppProps['noParamVoid'];
  handleDay: AppProps['stringVoid'];
  facilities: AppProps['facilities'];
}

const Form: React.FC<Props> = ({ handleModalOff, handleDay, facilities }) => {
  const today = new Date();
  const todayDate = `${today.getDate()}-${today.getMonth()+1}`;
  const nextDates = [];
  for (let i = 1; i <= 7; i++) {
    const month = (today.getMonth()+1).toString().length === 1 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
    const date = (today.getDate() + i).toString().length === 1 ? `0${today.getDate() + i}` : today.getDate() + i;
    nextDates.push(`${date}-${month}`);
  }
  // handleDay(e.target.value)

  return (
    <form className='modal-form'>
      <label>Name</label>
      <input placeholder='Name'/>
      <label>Email</label>
      <input placeholder='Email'/>
      <label>Facility</label>
      <select title='center' onChange={(e) => handleDay(e.target.value)}>
        <option value='Default'>Choose a facility</option>
        {
          facilities.map(fac => {
            return (
              <option  key={Math.floor(Math.random() * 100)} value={fac.name}>{fac.name}</option>
            );
          })
        }
      </select>
      <div className="modal-select">
        <label>Choose a date:</label>
        <select title='date-dropdown'>
          <option value={todayDate}>Today</option>
          {nextDates.map(date => {
            return (
              <option key={date} value={date}>{date}</option>
            );
          })}
        </select>
        <label>Choose a time:</label>
        <select title='time-dropdown'>
          <option value='Default'>Choose a time</option>
        </select>
      </div>
      <div className="modal-form-footer">
        <button type='submit'>Submit</button>
        <button type='button' onClick={handleModalOff}>Cancel</button>
      </div>
    </form>
  );
};

export default Form;