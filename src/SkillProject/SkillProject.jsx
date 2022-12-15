import './SkillProject.css';
import Cards from '../Cards/Cards';
import Progress from '../Progress/Progress';
import skillData from './SkillData';
import projectData from './projectData';

function SkillProject( { isDarkMode } ) {
  return (
    <div className="skill-project">
      <div>
        <h2 className={isDarkMode ? "page-heading-dark" : ""}>Skills</h2>
        <Progress progressList={skillData} isDarkMode={isDarkMode}/>
      </div>
      <div>
        <h2 className={isDarkMode ? "page-heading-dark" : ""}>Projects</h2>
        <Cards cardsData={projectData} isDarkMode={isDarkMode}/>
      </div>
    </div>
  );
}

export default SkillProject;
