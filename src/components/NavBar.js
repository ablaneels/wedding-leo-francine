import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';
import Open from "../icons/menu-open.svg"
import Close from "../icons/close-square-svgrepo-com.svg"
import { Button } from './Button';


function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if (window.innerWidth <= 960)
            setButton(false);
        else
            setButton(true);
    };

    window.addEventListener('resize', showButton);
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <div className='menu-icon' onClick={handleClick}>
                    <img src={click ? Close : Open}/>
                </div>
                <ul className={click ? 'menu active': 'menu'}>
                    <li className='navbar-item'>
                        <Link to="/" className="navbar-link" onClick={closeMobileMenu}>
                            HOME
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/rsvp" className="navbar-link" onClick={closeMobileMenu}>
                            RSVP
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/venue" className="navbar-link" onClick={closeMobileMenu}>
                            VENUE
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/dresscode" className="navbar-link" onClick={closeMobileMenu}>
                            DRESS CODE
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/agenda" className="navbar-link" onClick={closeMobileMenu}>
                            AGENDA
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar
