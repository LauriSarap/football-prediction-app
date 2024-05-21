import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/login">Login</Link> | 
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navigation;