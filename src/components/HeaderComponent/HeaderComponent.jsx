import "./headerComponent.style.css";

const HeaderComponent = ({ type, text }) => {
  return <h1 className={type}>{text}</h1>;
};

export default HeaderComponent;
