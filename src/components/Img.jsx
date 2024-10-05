import React from "react";

const Img = ({ src, alt, ...other }) => {
  return <img src={src} alt={alt} {...other} />;
};

export default Img;
