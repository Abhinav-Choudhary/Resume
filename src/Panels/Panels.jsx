import './Panels.css';

function Panels( { panelsList=[], isDarkMode } ) {

  const panelsData = panelsList.map((data) => {
    return (
    <div className={`panels ${isDarkMode ? "panels-dark" : ""}`} key={data.key}>
      <h2 className={`panel-heading ${isDarkMode ? "heading-dark" : ""}`}><img className={data.imageClass} src={data.imageSrc} alt={data.imageAlt}/>{data.title}</h2>
      {data.body.map((elements, index) => {
        return (
        <p className={`panel-text ${isDarkMode ? "text-dark" : ""}`} key={index.toString()}>{elements}</p>
        )})
      }
    </div>)
    }); 

  return (
    <div className="panels-container">
      { panelsData }
    </div>
  );
}

export default Panels;
