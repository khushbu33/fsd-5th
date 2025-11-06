import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  // List of images (all URLs must be inside quotes)
  const images = [
    "https://tse2.mm.bing.net/th/id/OIP.BD9cf1eaFBIVQLMXThVtLgHaE6?pid=Api&P=0&h=180",
    "https://wallup.net/wp-content/uploads/2016/03/10/318375-nature-landscape-lake-mountain-forest-wildflowers-spring-pine_trees-path-Switzerland-HDR.jpg",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70"
  ];

  // State to track the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-slider">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default App;
