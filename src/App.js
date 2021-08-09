import React from 'react';
import './style.css';
import Users from './Users';
import Menu from './Menu';

export default function App() {
  return (
    <div className="page">
      <Menu />
      <Users />
    </div>
  );
}
