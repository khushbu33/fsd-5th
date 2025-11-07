import { useState } from "react";
import "./App.css";

function App() {
  const [rotate, setRotate] = useState(false);

  return (
    <div className="app">
      <h1 className="title">Rotating Image </h1>
      
      <div className={`image-container ${rotate ? "rotate" : ""}`}>
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.BD9cf1eaFBIVQLMXThVtLgHaE6?pid=Api&P=0&h=180"
          alt="Rotating"
        />
      </div>

      <button onClick={() => setRotate(!rotate)}>
        {rotate ? "Stop Rotation" : "Start Rotation"}
      </button>
    </div>
  );
}

export default App;

