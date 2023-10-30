import React, { useState } from 'react';
import Button from './Button';

const FormAddFriend = ({ addNewFriend }) => {
  const [friendName, setFriendName] = useState('');
  const [friendPhoto, setFriendPhoto] = useState('https://i.pravatar.cc/48');
  const addNewFriendHandler = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();

    if (!friendName || !friendPhoto) return;
    addNewFriend({
      id,
      name: friendName,
      image: `${friendPhoto}?=${id}`,
      balance: 0,
    });
    setFriendName('');
    setFriendPhoto('https://i.pravatar.cc/48');
  };

  return (
    <form onSubmit={addNewFriendHandler} className='form-add-friend'>
      <label>👬Friend name</label>
      <input
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
        type='text'
      />
      <label>🌆 Image URL </label>
      <input
        value={friendPhoto}
        onChange={(e) => setFriendPhoto(e.target.value)}
        type='text'
      />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
