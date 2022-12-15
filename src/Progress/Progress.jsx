import './Progress.css';

function Progress( { progressList=[], isDarkMode } ) {
  const progressItems = progressList.map((item) => {
    return (
      <div className="progress-element" key={item.key}>
        <span className={`progress-title ${isDarkMode ? "heading-dark" : ""}`}>{item.title}</span>
        <progress className="progress-bar" max={item.maxValue} value={item.value} title={item.progressText}>{item.progressText}</progress>
      </div>
    )
  });
  return (
    <div className={`progress ${isDarkMode ? "progress-dark" : ""}`}>
      { progressItems }
    </div>
  );
}

export default Progress;
