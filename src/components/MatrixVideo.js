import React from "react";
import styled from "styled-components";
import MatrixImage from "./MatrixImage";

const MatrixVideo = ({ video, query, favorites, setFavorites }) => {
  return (
    <MatrixVideoBox>
      <MatrixImage
        video={video}
        alt={query}
        favorites={favorites}
        setFavorites={setFavorites}
      ></MatrixImage>
      <VideoLink target="_blank" href={video.url}>
        <span>Watch</span>
      </VideoLink>
    </MatrixVideoBox>
  );
};

const MatrixVideoBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const VideoLink = styled.a`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 40px;
  width: 100%;
  text-decoration: none;
  display: inline-block;
  background: #32e0c4;
  color: black;
  font-size: 1.3rem;
  text-align: center;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    background: none;
  }

  :hover {
    background: #0d7377;
    color: white;
  }
`;

export default MatrixVideo;
