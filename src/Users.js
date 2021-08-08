import React from 'react';
import User from './User';
import { WithAllUsers } from './WithAllUsers';

function Users(props) {
  return (
    <div>
      <h1>Record of Users</h1>
      <div className="card-grid">
        {props.users.map(user => (
          <User key={user.id} name={user.name} email={user.email} />
        ))}
      </div>
    </div>
  );
}

export default WithAllUsers(Users);
