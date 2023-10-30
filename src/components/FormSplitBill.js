import React, { useState } from 'react';
import Button from './Button';
const FormSplitBill = ({ friend, onSplitBill }) => {
  const [billValue, setBillValue] = useState('');
  const [whoIsPaying, setWhoIsPaying] = useState('');
  const [option, setOption] = useState('user');
  const paydByFriend = billValue ? billValue - whoIsPaying : '';

  const handleSubmitt = (e) => {
    e.preventDefault();

    if (!billValue || !whoIsPaying) return;
    onSplitBill(option === 'user' ? paydByFriend : -whoIsPaying);
  };
  return (
    <form className='form-split-bill' onSubmit={handleSubmitt}>
      <h2>Split a bill with {friend.name}</h2>
      <label>💰 Bill Value</label>
      <input
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
        type='number'
      />
      <label>🧍 Your expenses</label>
      <input
        value={whoIsPaying}
        onChange={(e) =>
          setWhoIsPaying(
            Number(e.target.value) > billValue
              ? whoIsPaying
              : Number(e.target.value)
          )
        }
        type='number'
      />
      <label>👬 {friend.name} expenses</label>
      <input value={paydByFriend} type='number' disabled />
      <label>🤑 Who is paying the bill ?</label>
      <select value={option} onChange={(e) => setOption(e.target.value)}>
        <option value='user'>You</option>
        <option value='friend'>{friend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
