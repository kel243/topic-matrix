import React from "react";
import styled from "styled-components";
import MatrixImage from "./MatrixImage";
import MatrixVideo from "./MatrixVideo";

const Matrix = ({ images, videos }) => {
  return (
    <MatrixStyle>
      <MatrixVideo video={videos[0]} key={videos[0].id}></MatrixVideo>
      {images.map((image) => (
        <MatrixImage image={image} key={image.id}></MatrixImage>
      ))}
      <MatrixVideo video={videos[1]} key={videos[1].id}></MatrixVideo>
    </MatrixStyle>
  );
};

const MatrixStyle = styled.div`
  display: grid;
  max-width: 600px;
  max-height: 600px;
  width: 80%;
  height: 80%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

export default Matrix;
