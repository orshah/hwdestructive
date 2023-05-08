import ImageComponent from "./components/ImageComponent/ImageComponent";
import picOne from "./components/images/NFS.jpg";
import picTwo from "./components/images/Guardians-of-the-Galaxy-1.jpg";
import picThree from "./components/images/LOR PIC.jpg";

import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

import "./App.css";

function App() {
  const showAlert = () => {
    return alert("Yes, you clicked");
  };
  return (
    <>
      <HeaderComponent type="header" text="I'm a HEADER" />
      <div className="container">
        <figure>
          <ImageComponent source={picOne} type="jump" />
          <figcaption>I can jump</figcaption>
        </figure>

        <figure>
          <ImageComponent source={picTwo} type="rotate" />
          <figcaption>I can rotate</figcaption>
        </figure>
        <figure>
          <ImageComponent source={picThree} type="jello" />
          <figcaption>I am a jello</figcaption>
        </figure>
      </div>
      <ButtonComponent
        text="CLICK ME"
        type="btnAlert"
        onClickHandler={showAlert}
      />
    </>
  );
}

export default App;
