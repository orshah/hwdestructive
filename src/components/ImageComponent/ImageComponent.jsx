import "./imageComponent.style.css";
import React from "react";

const ImageComponent = ({ source, type }) => {
  const [jump, setJump] = React.useState(false);
  const [jello, setJello] = React.useState(false);
  const [rotate, setRotate] = React.useState(false);

  const handleJump = () => {
    setJump(true);
    setTimeout(() => setJump(false), 1000);
  };

  const handleJello = () => {
    setJello(true);
    setTimeout(() => setJello(false), 2000);
  };
  const handleRotate = () => {
    setRotate(true);
    setTimeout(() => setRotate(false), 1000);
  };

  return (
    <img
      className={`${type} ${rotate ? "rotate" : ""} ${jump ? "jump" : ""} ${
        jello ? "jello" : ""
      }`}
      src={source}
      alt=""
      onClick={() => {
        handleJump();
        handleJello();
        handleRotate();
      }}
    />
  );
};

export default ImageComponent;
