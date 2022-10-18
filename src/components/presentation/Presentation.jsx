import "./Presentation.css";
import qrimg from "../../assets/imgs/LogoPngBlancoConSombra.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import { LoginForm } from "../LoginForm/LoginForm";
import { useState } from "react";

export const Presentation = () => {
  const [isShowLogin, setIsShowlogin] = useState(false);

  const handleLoginClick = () => {
    setIsShowlogin((isShowLogin) => !isShowLogin);
  };

  return (
    <div>
      <div
        className="presentation"
        style={{ filter: `blur(${isShowLogin ? 10 : 0}px)` }}
      >
        <div className="svgBackground">
          <div className="gridWrapper">
            <img src={qrimg} className="logo" alt="qrimg" />
            <div className="presentationWrapper">
              <h1 className="presentationTitle">
                The QR code that could save your life
              </h1>
              <p className="presentationParagraph">
                Create a QR code with your medical information. You can then
                print it or have it as your phone background in case of
                emergency.
              </p>
            </div>
          </div>
          <div className="buttonsDiv">
            <button className="buttonOne">
              Scan QR &nbsp; <ArrowRightOutlined />{" "}
            </button>
            <button onClick={handleLoginClick} className="buttonTwo">
              Sign In / Sign Up &nbsp; <ArrowRightOutlined />{" "}
            </button>
          </div>
        </div>
      </div>
      <LoginForm isShowLogin={isShowLogin} />
    </div>
  );
};
