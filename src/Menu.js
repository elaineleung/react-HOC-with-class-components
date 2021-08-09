import React from 'react';
import { WithAllUsers } from './WithAllUsers';
import MenuIcon from './MenuIcon';

function Menu(props) {
  return (
    <div className="menu">
      <MenuIcon />
      <nav className="nav">
        <div className="nav-container">
          <h2>Users</h2>
          {props.users.map(user => (
            <h4 key={user.id}>{user.name}</h4>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default WithAllUsers(Menu);
