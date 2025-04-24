import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css';
import Open from "../icons/menu-open.svg"
import Close from "../icons/close-square-svgrepo-com.svg"
import { useTranslation } from 'react-i18next';


function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const location = useLocation();
    const selectedLink =  location.pathname;
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const { t } = useTranslation();
    
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
                        <Link to="/" className={selectedLink === '/' ? 'selected-navbar-link' : 'navbar-link'} onClick={closeMobileMenu}>
                            {t('navbar_home')}
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/rsvp" className={selectedLink === '/rsvp' ? 'selected-navbar-link' : 'navbar-link'} onClick={closeMobileMenu}>
                            {t('navbar_rsvp')}
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/venue" className={selectedLink === '/venue' ? 'selected-navbar-link' : 'navbar-link'} onClick={closeMobileMenu}>
                            {t('navbar_venue')}
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/dresscode" className={selectedLink === '/dresscode' ? 'selected-navbar-link' : 'navbar-link'} onClick={closeMobileMenu}>
                            {t('navbar_dressCode')}
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/agenda" className={selectedLink === '/agenda' ? 'selected-navbar-link' : 'navbar-link'} onClick={closeMobileMenu}>
                            {t('navbar_agenda')}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar
