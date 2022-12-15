import './HobbyInterest.css';
import Carousel from '../Carousel/Carousel';
import imagesList from './imagesList';
import hobbiesData from './HobbiesData';
import Panels from '../Panels/Panels';

function HobbyInterest( { isDarkMode } ) {
  return (
    <div className="hobby-interest">
        <h2 className={isDarkMode ? "page-heading-dark" : ""}>Hobbies & Interests</h2>
        <p className={`hobby-brief ${isDarkMode ? "text-dark" : ""}`}>Here are a few things I like to do....</p>
        <Panels panelsList={hobbiesData} isDarkMode={isDarkMode}/>
        <h3 className={isDarkMode ? "page-heading-dark" : ""}>My Photography Shots</h3>
        <Carousel imagesList={imagesList} isDarkMode={isDarkMode}/>
    </div>
  );
}

export default HobbyInterest;
