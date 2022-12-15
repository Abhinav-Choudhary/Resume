import './Cards.css';

function Cards( { cardsData=[], isDarkMode } ) {
  const cards = cardsData.map((data) => {
    return (
      <div className={`cards ${isDarkMode ? "cards-dark" : ""}`} key={data.key}>
        <img className="cards-image" src={data.imageSrc} alt={data.imageAlt}/>
        <h2 className={`cards-heading ${isDarkMode ? "card-heading-dark" : ""}`}>{data.title}</h2>
        <p className={`cards-body ${isDarkMode ? "text-dark" : ""}`}>{data.briefDescription}</p>
        <a className={`cards-link`} href={data.href} target="_blank" aria-label={data.linkTitle}>{data.linkTitle}</a>
      </div>
    );
  });

  return (
    <div className="cards-container">
      { cards }
    </div>
  );
}

export default Cards;
