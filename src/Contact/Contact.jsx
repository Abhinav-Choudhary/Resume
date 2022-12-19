import './Contact.css';
import ContactData  from './ContactData';

function Contact( {isDarkMode} ) {
const contacts = ContactData.map((contact) => {
  return (
  <div className={`contact-container`} key={contact.key}>
        <h3 className={`contact-heading`}>{contact.heading}</h3>
        <h4 className={`contact-heading ${isDarkMode ? "heading-dark" : ""}`}>{contact.title}</h4>
        <p className={`contact-paragraph ${isDarkMode ? "text-dark" : ""}`} >{contact.phone}</p>
        <p className={`contact-paragraph ${isDarkMode ? "text-dark" : ""}`} >{contact.email}</p>
        <nav>
          <ul className="contact-menu">
          {
            contact.links.map((link) => {
              return (
              <li key={link.key} className={`contact-social-list ${isDarkMode ? "contact-social-list-dark" : ""}`}>
                  {
                    link.isIcon ? 
                    (<a className="contact-social-link" href={link.href} target="_blank" aria-label={`Go to ${link.title} page`} rel="noreferrer">
                      <i className={link.className} title={link.title}></i>
                    </a>)
                    :
                    (<a className="contact-social-link" href={link.href} target="_blank" aria-label={`Go to ${link.title} page`} rel="noreferrer">
                      <span className={link.className} title={link.title}>{link.text}</span>
                    </a>)
                  }
                </li>
              )})
          }      
          </ul>
        </nav>
  </div>)
});
  return (
    <div className={`contact ${isDarkMode ? "contact-dark" : ""}`}>
      { contacts }
    </div>
  );
}

export default Contact;
