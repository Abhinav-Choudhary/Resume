import './Header.css';
import {useState} from 'react';
import {headerData, socialLinks} from './HeaderData';
// import Logo from "./../images/PassportPhoto.jpg";

function Header( { navigation, isDarkMode, toggleDarkMode } ) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [disabledLink, setDisabledLink] = useState(true);
    // const subMenuOpen = menuOpen ? "header-sub-menu-open" : "";
    // const rotateMenuIcon = menuOpen ? "header-menu-icon-open" : "";
    const isLinkDisabled = disabledLink ? "disable-sub-menu-link" : "";

    function updateMenuState() {
        setMenuOpen(!menuOpen);
        setDisabledLink(!disabledLink);
    }

    const navigationLinks = headerData.map((nav) => 
            <li className="navigation-sub-menu" key={nav.key}>
                <a className={`navigation-sub-menu-link ${isDarkMode ? "sub-menu-link-dark" : ""} ${isLinkDisabled}`} href={nav.href} onClick={(event) => { navigation(event, nav.navigation); updateMenuState();}}>
                    {nav.title}
                </a>
            </li>
    );

    const socialMediaLinks = socialLinks.map((social) =>
        <a href={social.href} className="social-media-links" key={social.key}>
            <i className={social.logo} aria-hidden="true" title={social.title}></i>
        </a>
    );

    return (
    <header className={`header ${isDarkMode ? "header-dark" : ""}`}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
            <h1 className="logo me-auto me-lg-0"><a href="/" className="logo-link" onClick={(event) => { navigation(event, "HomeAbout"); }}>Abhinav Choudhary</a></h1>
            <nav className="navigation navbar order-last order-lg-0">
                    <ul className="navigation-menu">
                    { navigationLinks }
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
            <div className="header-social">
                {socialMediaLinks}
      </div>
        </div>
    </header>
    );
}

export default Header;
