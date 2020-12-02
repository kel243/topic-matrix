import React, { useState } from "react";
import Matrix from "./components/Matrix";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  return (
    <div className="App">
      <Matrix images={images} videos={videos} />
    </div>
  );
}

export default App;
