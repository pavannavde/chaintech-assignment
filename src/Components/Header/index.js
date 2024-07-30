import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <h1>Assignment</h1>
      <div>
        <Link to={'/'}>Login</Link>
        <Link to={'/registration'}>Register</Link>
        <Link to={'/profile'}>Profile</Link>
      </div>
    </div>
  )
}

export default Header;
