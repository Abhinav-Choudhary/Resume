import './Accordian.css';
import { useState } from 'react';


function Accordian( { accordianKey, heading, subHeading, content = [], dateRange, isDarkMode, isRoundTop, isRoundBottom } ) {
  const [accordianOpen, setAccordianOpen] = useState(false);
  const showAccordian = accordianOpen ? "accordian-body-open" : "";
  const rotateAccordianIcon = accordianOpen ? "accordian-chevron-rotate" : "";
  

  function updateAccordianState() {
    setAccordianOpen(!accordianOpen);
  }

  const accordianBody = [
    <div className={`accordian ${isRoundTop ? "border-round-top" : (isRoundBottom ? "border-round-bottom" : "")} ${isDarkMode ? "accordian-dark" : ""}`} key={ accordianKey }>
        <button className={`accordian-heading ${isRoundTop ? "border-round-top" : (isRoundBottom ? "border-round-bottom" : "")} ${isDarkMode ? "accordian-heading-dark" : ""}`} onClick={updateAccordianState} type="button" aria-label="Open or close accordian">
          <span className={`accordian-title ${isDarkMode ? "heading-dark" : ""}`}>{heading}</span>
          <i className={`gg-chevron-right accordian-chevron ${rotateAccordianIcon}`}></i>
        </button>
        <div className={`accordian-body ${showAccordian}`}>
          <p className={`accordian-content education-level-heading ${isDarkMode ? "heading-dark" : ""}`}>{subHeading}<span>{dateRange}</span></p>
            {
              content  && content.map((elements, index) => {
                return (
                <p key={index.toString()} className={`accordian-content ${isDarkMode ? "text-dark" : ""}`}>{elements}</p>
                );
              })
            }
        </div>
      </div>
  ];


  return (
    <div className="accordian-container">
      { accordianBody }
    </div>
  );
}

export default Accordian;
