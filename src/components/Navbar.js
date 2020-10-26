import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false)
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i class= {click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link' onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-link' onClick={closeMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/resume' className='nav-link' onClick={closeMenu}>
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;