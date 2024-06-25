import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaUser } from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://pixlr.com/img/general/pixlr-logo.svg" alt="Pixlr Logo" />
      </div>
      <ul className="nav-links">
        <li className="admin"><Link to="/">Home</Link></li>
        <li className="admin"><Link to="/login-signup"><FaUser /> Sign up / Log in</Link></li>
        <li className="bell"><a href="#"><i className="fas fa-bell"></i></a></li>
        <li className='toggle'><a href="#" onClick={toggleMenu}><i className="fas fa-bars"></i></a></li>
      </ul>
      {menuVisible && (
        <div className="menu">
          <ul>
            <li><Link to="/"https://github.com/Jaya272000/Photo_Snap_Group6/pull/3/conflict?name=src%252FComponent%252FNavbar.jsx&base_oid=bd98fb00e79a4fe251a553d3b020589b6ee532fd&head_oid=40547e5afcceafedd4aeed4d81a7cd6624477ab1>Home</Link></li>
            <li><Link to="/login-signup">Login/Signup</Link></li>
            <li><a href="#">Edit</a></li>
            <li><a href="#">Footer</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
