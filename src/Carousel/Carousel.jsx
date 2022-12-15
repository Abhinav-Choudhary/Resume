import './Carousel.css';
import { useState, useEffect, useRef  } from "react";

function Carousel( { imagesList, isDarkMode } ) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timerRef = useRef(null);
  const timerDelay = 10000;

  function nextImage() {
    if (currentImageIndex === (imagesList.length - 1)) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }

  function previousImage() {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(imagesList.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  }

  function resetTimer() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }

  const photos = imagesList.map((image) => {
    return (
      <div key={image.key} className={`fade ${imagesList[currentImageIndex].key === image.key ? "" : "slide"}`}>
        <img className="photo" src={image.url} alt={image.alt} title={image.title}/>
        <p className="caption">{image.title}</p>
        <p className="description">{image.description}</p>
        <button className="previous-image" type="button" onClick={previousImage} aria-label="View previous image">&lt;</button>
        <button className="next-image" type="button" onClick={nextImage} aria-label="View next image">&gt;</button>
      </div>
    );
  });

  const positionDots = imagesList.map((image) => {
    return (
      <span key={image.key} className={`dot ${imagesList[currentImageIndex].key === image.key ? "dot-active" : ""}`} onClick={() => {setCurrentImageIndex(image.key)}}></span>
    );
  });

  useEffect(() => {
    resetTimer();
    timerRef.current = setTimeout(
      () =>
      setCurrentImageIndex((prevIndex) =>
          prevIndex === (imagesList.length - 1) ? 0 : prevIndex + 1
        ),
      timerDelay
    );

    return () => {
      resetTimer();
    };
  }, [currentImageIndex]);

  return (
    <div className="carousel">
      {photos}
      <div className='position-dots'>
        {positionDots}
      </div>
    </div>
  );
}

export default Carousel;
