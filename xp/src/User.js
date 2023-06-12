import React from 'react';
import UserFavoriteColors from './UserFavoriteColors';

const User = () => {
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
  };

  return (
    <div>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteColors favAnimals={user.favAnimals} />
    </div>
  );
};

export default User;
