// import './App.css';
// import Header from './Header/Header';
// import Main from './Main/Main';
// import Footer from './Footer/Footer';
import './Css/main-app.css'
import Sidebar from './SideBar/Sidebar';
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("HomeAbout");
  const [isDarkMode, setIsDarkMode] = useState(false);

  function navigation(event, newPage) {
    event.preventDefault();
    setCurrentPage(newPage);
  }

  function toggleDarkMode(event) {
    setIsDarkMode(event.target.checked);
  }

   return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <Sidebar navigation={navigation} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {/* <Header navigation={navigation} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Main currentPage={currentPage} isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/> */}
    </div>
  );
}

export default App;
