/* eslint-disable jsx-a11y/anchor-is-valid */
import './Form.css';
import { useState  } from 'react';
import ContactData from '../Contact/ContactData';

function Form( { isDarkMode } ) {

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const myEmail = ContactData[0]["email"];

  const mailtoContent = `mailto:${myEmail}?subject=${formFields.subject}&body=${formFields.name},%0D%0A${formFields.message}`;
  const disableLink = !(formFields.name && formFields.subject && formFields.message);

  return (
    <div className={`form-container ${isDarkMode ? "form-container-dark" : ""}`}>
      <form className="form" action="/submit" method="POST">
              <div className="form-field-container">
                <label className="form-label">
                  <span className={`form-span required ${isDarkMode ? "heading-dark" : ""}`}>Name</span>
                  <input className={`form-input ${formFields.name ? "" : "invalid"}`} name="name" type="text" 
                  value={formFields.name} onChange={(event) => setFormFields({...formFields, name: event.target.value})} placeholder="Please enter your full name (Example: John Doe)."/>
                </label>
                <span className={`error ${formFields.name ? "hide-error" : ""}`}>*Name is a required field. Please provide your name in order to proceed.</span>
              </div>
              <div className="form-field-container">
                <label className="form-label">
                  <span className={`form-span required ${isDarkMode ? "heading-dark" : ""}`}>Email</span>
                  <input className={`form-input ${formFields.email ? "" : "invalid"}`} name="email" type="email" 
                  value={formFields.email} onChange={(event) => setFormFields({...formFields, email: event.target.value})} placeholder="Please enter the email from which mail is to be sent (i.e. From Email)."/>
                </label>
                <span className={`error ${formFields.email ? "hide-error" : ""}`}>*Email is a required field. Please provide the email in order to proceed.</span>
              </div>
              <div className="form-field-container">
                <label className="form-label">
                  <span className={`form-span required ${isDarkMode ? "heading-dark" : ""}`}>Subject</span>
                  <input className={`form-input ${formFields.subject ? "" : "invalid"}`} type="text" name="subject" 
                  value={formFields.subject} onChange={(event) => setFormFields({...formFields, subject: event.target.value})} placeholder="Please enter email subject."/>
                </label>
                <span className={`error ${formFields.subject ? "hide-error" : ""}`}>*Subject is a required field. Please provide a subject in order to proceed.</span>
              </div>
              <div className="form-field-container">
                <label className="form-label">
                  <span className={`form-span required ${isDarkMode ? "heading-dark" : ""}`}>Message</span>
                  <textarea className={`form-input ${formFields.message ? "" : "invalid"}`} name="message" 
                  value={formFields.message} onChange={(event) => setFormFields({...formFields, message: event.target.value})} placeholder="Please enter your message." rows="5" cols="10"></textarea>
                </label>
                <span className={`error ${formFields.message ? "hide-error" : ""}`}>*Message is a required field. Please provide the message in order to proceed.</span>
              </div>
              <a className={`form-button ${disableLink ? "disable-link" : ""}`} href={disableLink ? null : mailtoContent} aria-label="Submit form">Submit</a>
            </form>
      </div>
  );
}

export default Form;
