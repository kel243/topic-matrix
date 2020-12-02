import React from "react";
import styled from "styled-components";

const MatrixVideo = ({ video }) => {
  return (
    <MatrixVideoBox>
      <MatrixImg src={video.image}></MatrixImg>
      <VideoLink href={video.url}>Watch</VideoLink>
    </MatrixVideoBox>
  );
};

const MatrixVideoBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const MatrixImg = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const VideoLink = styled.a`
  text-decoration: none;
  width: 100%;
  background: #32e0c4;
  color: black;
  font-size: 1.3rem;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 40px;
  transition: all 0.2s ease;

  :hover {
    background: #0d7377;
    color: white;
  }
`;

export default MatrixVideo;
