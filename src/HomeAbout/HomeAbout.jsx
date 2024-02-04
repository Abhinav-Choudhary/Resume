import './HomeAbout.css';
import resume from "./../AbhinavChoudhary_SoftwareEngineer.pdf";
import homeAboutData from './HomeAboutData';

function HomeAbout( { isDarkMode } ) {
  const details = homeAboutData.map((detail) => {
    return (
      <div className="home-about" key={detail.key}>
        <div className="salutation">
        <p className={`greeting ${isDarkMode ? "text-dark" : ""}`}>{ detail.greeting }</p>
        <h2 className={`name ${isDarkMode ? "heading-dark" : ""}`}>{detail.name}</h2>
        <p className={`role ${isDarkMode ? "text-dark" : ""}`}>{detail.role}</p>
      </div>
      <div className={`about-resume ${isDarkMode ? "about-resume-dark" : ""}`}>
      <div className="about-me">
        <h3 className={isDarkMode ? "page-heading-dark" : ""}>{detail.aboutHeading}</h3>
        {detail.aboutBody.map((elements, index) => {
          return (
          <p key={index.toString()} className={isDarkMode ? "text-dark" : ""}>{elements}</p>
          )
        })}
      </div>
      <div className="resume">
        <h3 className={isDarkMode ? "page-heading-dark" : ""}>{detail.resumeHeading}</h3>
        {detail.resumeBody.map((elements, index) => {
          return (
          <p key={index.toString()} className={`resume-body ${isDarkMode ? "text-dark" : ""}`}>{elements}</p>
          )
        })}
        <a className="download-resume" href={resume} download aria-label="Download Pdf version of the resume">{detail.resumeDownloadText}</a>
      </div>
      </div>
      </div>
    );
  });
  return (
    <>
    {details}
    </>
  );
}

export default HomeAbout;
