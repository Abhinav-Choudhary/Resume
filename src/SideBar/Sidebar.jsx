import './Sidebar.css';
import sidebarContents from './SidebarData';
import Logo from './../images/Portrait.png'

function Sidebar( { navigation, isDarkMode, toggleDarkMode } ) {
  const navigationLinks = sidebarContents.map((nav) => 
            <li className="sub-menu-item" key={nav.key}>
                <a className={`sub-menu-link ${isDarkMode ? "sub-menu-link-dark" : ""}`} href={nav.href} onClick={(event) => { navigation(event, nav.navigation);}}>
                    {nav.title}
                </a>
            </li>
    );
  return (
    <section id="sidebar">
				<div className="sidebar-inner">
					<nav>
						<ul>
							{navigationLinks}
						</ul>
					</nav>
          <a href="/" className="logo-link" onClick={(event) => { navigation(event, "Home"); }}><img className="logo" src={Logo} alt="Abhinav Choudhary in white shirt with orange strips."/></a>
          <p className="name-tag">ABHINAV CHOUDHARY</p>
				</div>
			</section>
  );
}

export default Sidebar;
