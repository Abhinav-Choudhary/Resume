import './EducationWork.css';
import Accordian from '../Accordian/Accordian';
import Timeline from '../Timeline/Timeline';
import educationData from './EducationData';
import workData from './WorkData';

function EducationWork( { isDarkMode } ) {
  const educationDetails = educationData.map((detail) => {
    return (
      <Accordian key={detail.key} 
      accordianKey={detail.key}
      heading={detail.heading}
      subHeading={detail.subHeading}
      content={detail.content}
      dateRange={detail.dateRange}
      isDarkMode={isDarkMode}
      isRoundTop={detail.isRoundTop}
      isRoundBottom={detail.isRoundBottom}/>
    );
  });
  return (
    <div className="education-work">
      <div>
        <h2 className={isDarkMode ? "page-heading-dark" : ""}>Education</h2>
        { educationDetails }
      </div>
      <div>
        <h2 className={isDarkMode ? "page-heading-dark" : ""}>Work Experience</h2>
        <Timeline content={workData} isDarkMode={isDarkMode}/>
      </div>
    </div>
  );
}

export default EducationWork;
