import './Main.css';
import HomeAbout from '../HomeAbout/HomeAbout';
import EducationWork from '../EducationWork/EducationWork';
import SkillProject from '../SkillProject/SkillProject';
import HobbyInterest from '../HobbyInterest/HobbyInterest';
import ContactMe from '../ContactMe/ContactMe';

function Main( { currentPage, isDarkMode } ) {
  return (
    <main className={`main ${isDarkMode ? "main-dark" : ""}`} id="main">
      { currentPage === "HomeAbout" && <HomeAbout isDarkMode={isDarkMode}/> }
      { currentPage === "EducationWork" && <EducationWork isDarkMode={isDarkMode}/>}
      { currentPage === "SkillProject" && <SkillProject isDarkMode={isDarkMode}/>}
      { currentPage === "HobbyInterest" && <HobbyInterest isDarkMode={isDarkMode}/>}
      { currentPage === "ContactMe" && <ContactMe isDarkMode={isDarkMode}/>}
    </main>
  );
}

export default Main;
