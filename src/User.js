import React from 'react';

export default function User(props) {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </div>
  );
}
