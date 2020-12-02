import React, { useState } from "react";
import styled from "styled-components";
import Matrix from "./components/Matrix";
import SearchBox from "./components/SearchBox";
import "./app.css";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Saves favorites into local storage and clear favorites state
  const clickHandler = () => {
    localStorage.setItem(query, JSON.stringify(favorites));
    setFavorites([]);
  };

  return (
    <AppStyle>
      <SearchBox
        query={query}
        setQuery={setQuery}
        setImages={setImages}
        setVideos={setVideos}
      />

      {/* Only render matrix if there are results for videos and images */}
      {images.length > 0 && videos.length > 0 && (
        <Matrix
          images={images}
          videos={videos}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      )}

      {/* Only render save button if there are results for videos and images */}
      {images.length > 0 && videos.length > 0 && (
        <SaveBtn type="button" onClick={clickHandler}>
          Save Selected
        </SaveBtn>
      )}
    </AppStyle>
  );
}

const AppStyle = styled.div`
  background: #eeeeee;
  width: 100vw;
  height: 90vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const SaveBtn = styled.button`
  font-size: 1.3rem;
  border: none;
  background: #32e0c4;
  color: white;
  padding: 5px 10px;
  height: 50px;
  width: 200px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    background: #0d7377;
  }
`;

export default App;
