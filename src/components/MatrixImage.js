import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const MatrixImage = ({ image, video, query, favorites, setFavorites }) => {
  const [favorited, setFavorited] = useState(false);
  const imgRef = useRef(null);

  // Add styling to favorited images/videos
  useEffect(() => {
    if (favorited) {
      imgRef.current.classList.add("favorited");
    } else {
      imgRef.current.classList.remove("favorited");
    }
  }, [favorited]);

  // Toggle favorited state
  // Add image/video to favorites state if it is favorited
  // Remove image/video from favorites state if it is unfavorited
  const clickHandler = (mode) => {
    setFavorited(!favorited);
    if (mode === "photo") {
      if (favorited) {
        setFavorites([...favorites, image.url]);
      } else {
        setFavorites(favorites.filter((favorite) => favorite !== image.url));
      }
    } else {
      if (favorited) {
        setFavorites([...favorites, video.url]);
      } else {
        setFavorites(favorites.filter((favorite) => favorite !== video.url));
      }
    }
  };

  if (image) {
    return (
      <MatrixImg
        ref={imgRef}
        src={image.src.original}
        alt={query}
        onClick={() => clickHandler("photo")}
      ></MatrixImg>
    );
  } else if (video) {
    return (
      <MatrixImg
        ref={imgRef}
        src={video.image}
        alt={query}
        onClick={() => clickHandler("video")}
      ></MatrixImg>
    );
  }
};

const MatrixImg = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;

  transition: all 0.1s ease;
`;

export default MatrixImage;
