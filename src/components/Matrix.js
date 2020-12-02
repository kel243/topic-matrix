import React from "react";
import styled from "styled-components";

const Matrix = ({ images, videos }) => {
  return <MatrixStyle></MatrixStyle>;
};

const MatrixStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(300px, 3);
  grid-template-rows: repeat(300px, 3);
`;

export default Matrix;
