import "./imageComponent.style.css";

const ImageComponent = ({ source, type }) => {
  return <img className={`${type}`} src={source} alt="" />;
};

export default ImageComponent;
