import './Header.css';
import {useState} from 'react';
import headerData from './HeaderData';
import Logo from "./../images/PassportPhoto.jpg";

function Header( { navigation, isDarkMode, toggleDarkMode } ) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [disabledLink, setDisabledLink] = useState(true);
    const subMenuOpen = menuOpen ? "header-sub-menu-open" : "";
    const rotateMenuIcon = menuOpen ? "header-menu-icon-open" : "";
    const isLinkDisabled = disabledLink ? "disable-sub-menu-link" : "";

    function updateMenuState() {
        setMenuOpen(!menuOpen);
        setDisabledLink(!disabledLink);
    }

    const navigationLinks = headerData.map((nav) => 
            <li className="sub-menu-item" key={nav.key}>
                <a className={`sub-menu-link ${isDarkMode ? "sub-menu-link-dark" : ""} ${isLinkDisabled}`} href={nav.href} onClick={(event) => { navigation(event, nav.navigation); updateMenuState();}}>
                    {nav.title}
                </a>
            </li>
    );

    return (
    <header className={`header ${isDarkMode ? "header-dark" : ""}`}>
        <a className="skiplink" href="#main">Skip to Content</a>
        <div className='header-container'>
            <a href="/" className="logo-link" onClick={(event) => { navigation(event, "Home"); }}><img className="logo" src={Logo} alt="Abhinav Choudhary in white shirt with orange strips."/></a>
            <div className='content'>
                <h1 className="heading">ABHINAV CHOUDHARY</h1>
                <nav className="navigation">
                    <ul className="header-menu">
                        <li>
                            <i className={`gg-menu header-menu-icon ${rotateMenuIcon}`} aria-label="Menu" onClick={updateMenuState}></i>
                            <ul className={`header-sub-menu ${isDarkMode ? "header-sub-menu-dark" : ""} ${subMenuOpen}`}>
                                { navigationLinks }
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className='theme-toggle'>
            <input type="checkbox" className='darkMode' aria-label="dark mode toggle" id="darkMode" checked={isDarkMode} onChange={(event) => toggleDarkMode(event)}/>
            <label className='toggle' htmlFor="darkMode"></label> 
            <i className='gg-moon'></i> <i className='gg-sun'></i>  
        </div>  
    </header>
    );
}

export default Header;
