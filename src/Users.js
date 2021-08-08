import React from 'react';
import User from './User';
import { WithAllUsers } from './WithAllUsers';

function Users(props) {
  console.log(props);
  return (
    <div>
      <h1>Record of Users</h1>
      {props.users.map(user => (
        <User key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default WithAllUsers(Users);
