import './Timeline.css';

function Timeline( { content = [], isDarkMode } ) {
  const timelineEvents = content.map( (eventItem) => {
    return (
    <div className={`event ${eventItem.onLeft ? `event-left ${isDarkMode ? "event-dark event-left-dark" : ""}` : `event-right ${isDarkMode ? "event-dark event-right-dark" : ""}`}`} key={eventItem.key}>
      <div className={`event-content ${isDarkMode ? "event-content-dark" : ""}`}>
        <h3 className={`timeline-heading ${isDarkMode ? "timeline-heading-dark" : ""}`}>{eventItem.heading}<span className="event-date-range">{eventItem.dateRange}</span></h3>
        <p className={`organization-details ${isDarkMode ? "text-dark" : ""}`}>{eventItem.organization}</p>
        <p className={`organization-details ${isDarkMode ? "text-dark" : ""}`}>{eventItem.organizationLocation}</p>
        {
          eventItem.responsibilities.map((responsibility) => {
            return (
              <div key={responsibility.key}>
              <p className={`event-detail-heading ${isDarkMode ? "heading-dark" : ""}`}>{responsibility.heading}</p>
              <ul className="event-list">
              {responsibility.items.map((elements, index) => {
                return (
                <li className={`event-item ${isDarkMode ? "text-dark" : ""}`} key={index.toString()}> {elements}</li>
                );
              })}
              </ul>
              </div>
            );
          })
        }
      </div>
    </div>
    );});

  return (
    <div className={`timeline ${isDarkMode ? "timeline-dark" : ""}`}>
    { timelineEvents }
    </div>
  );
}

export default Timeline;
