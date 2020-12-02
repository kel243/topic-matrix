import React from "react";
import styled from "styled-components";
import { createClient } from "pexels";

const SearchBox = ({ query, setQuery, setImages, setVideos }) => {
  const client = createClient(process.env.REACT_APP_PEXELS_API);

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const clickHandler = () => {
    client.photos.search({ query, per_page: 7 }).then((photos) => {
      setImages(photos.photos);
    });
    client.videos.search({ query, per_page: 2 }).then((videos) => {
      setVideos(videos.videos);
    });
    setQuery("");
  };

  return (
    <SearchBoxStyle>
      <SearchBar
        type="text"
        placeholder="Search..."
        onChange={changeHandler}
        value={query}
      ></SearchBar>
      <SearchBtn type="button" onClick={clickHandler}>
        Search
      </SearchBtn>
    </SearchBoxStyle>
  );
};

const SearchBoxStyle = styled.div`
  width: 85vw;
  max-width: 600px;
  background: none;
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  border: none;
  background: white;
  font-size: 2rem;
  border-radius: 5px;
  height: 50px;
  width: 75%;
  padding: 5px 10px;
`;

const SearchBtn = styled.button`
  font-size: 1.3rem;
  border: none;
  background: #32e0c4;
  color: white;
  padding: 5px 10px;
  height: 50px;
  width: 25%;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    background: #0d7377;
  }
`;

export default SearchBox;
