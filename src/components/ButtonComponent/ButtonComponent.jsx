import "./buttonComponent.style.css";

const ButtonComponent = ({ text, type, onClickHandler }) => {
  return (
    <button className={`${type}`} onClick={onClickHandler}>
      {text}
    </button>
  );
};
export default ButtonComponent;
