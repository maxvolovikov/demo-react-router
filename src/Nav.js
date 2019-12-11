import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';


function Nav() {
  const navStyle = {
    color:'white',
  }
  return (
    <nav>
        <h3>Navigation</h3>
        <ul>
          <Link to='/about' style={navStyle}>
            <li className="nav-link">About</li>
          </Link>
          <Link to='/shop' style={navStyle}>
            <li className="nav-link" >Shop</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;