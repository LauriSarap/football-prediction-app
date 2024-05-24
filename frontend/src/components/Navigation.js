import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/login">Login</Link> | 
      <Link to="/register">Register</Link> | {/* Add Register Link */}
      <Link to="/dashboard">Dashboard</Link>
      {localStorage.getItem('token') && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </nav>
  );
}

export default Navigation;
