import './Footer.css';
import disclaimer from './Disclaimer';
import Contact from '../Contact/Contact';

function Footer( {isDarkMode} ) {
  const footerDisclaimer = disclaimer.map((disc) => {
    return (
    <div className={`disclaimer-container`} key={disc.key}>
          <h3 className={`disclaimer-heading`}>{disc.heading}</h3>
          {disc.body.map((elements, index) => {
                return (
                <p className={`disclaimer-paragraph ${isDarkMode ? "text-dark" : ""}`} key={index.toString()}>{elements}</p>
                )})
          }
    </div>)
});
  return (
    <footer className={`footer ${isDarkMode ? "footer-dark" : ""}`}>
      { footerDisclaimer }
      <Contact isDarkMode={isDarkMode}/>
    </footer>
  );
}

export default Footer;
