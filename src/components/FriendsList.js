import React from 'react';
import Friend from './Friend';
const FriendsList = ({ friends, splitBillOpenHandler, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          splitBillOpenHandler={splitBillOpenHandler}
          selectedFriend={selectedFriend}
        ></Friend>
      ))}
    </ul>
  );
};

export default FriendsList;
