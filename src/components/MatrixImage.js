import React from "react";
import styled from "styled-components";

const MatrixImage = ({ image, query }) => {
  return <MatrixImg src={image.src.original} alt={query}></MatrixImg>;
};

const MatrixImg = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
`;

export default MatrixImage;
