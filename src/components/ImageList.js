import './ImageList.css';
import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />  // specify url for our image
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;