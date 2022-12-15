import './ContactMe.css';
import Contact from '../Contact/Contact';
import Form from '../Form/Form';
import contactMeData from './ContactMeData';

function ContactMe( { isDarkMode } ) {
  const connectWithMe = contactMeData.map((connect) => {
    return (
    <div className="contact-me" key={connect.key}>
      <Contact isDarkMode={isDarkMode}/>
      <div className="connect">
        <h2 className={`connect-heading ${isDarkMode ? "page-heading-dark" : ""}`}>{connect.formHeading}</h2>
        <Form isDarkMode={isDarkMode}/>
      </div>
    </div>
    );
  });

  return (
    <>
    { connectWithMe }
    </>
  );
}

export default ContactMe;
