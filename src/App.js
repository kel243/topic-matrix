import React, { useState } from "react";
import styled from "styled-components";
import Matrix from "./components/Matrix";
import SearchBox from "./components/SearchBox";
import "./app.css";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  console.log(videos);

  return (
    <AppStyle>
      <SearchBox
        query={query}
        setQuery={setQuery}
        setImages={setImages}
        setVideos={setVideos}
      />
      <Matrix images={images} videos={videos} />
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

export default App;
