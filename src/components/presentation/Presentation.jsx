import React from "react";
import "./Presentation.css";
import qrimg from "../../assets/imgs/LogoPngBlancoConSombra.png";
import { PresentationButtons } from "./../presentationbuttons/PresentationButtons";

export const Presentation = () => {
  return (
    <div className="presentation">
      <div className="svgBackground">
        <div className="gridWrapper">
          <img src={qrimg} className="logo" alt="qrimg" />
          <div className="presentationWrapper">
            <h1 className="presentationTitle">
              The QR code that could save your life
            </h1>
            <p className="presentationParagraph">
              Create a QR code with your medical information. You can then print
              it or have it as your phone background in case of emergency.
            </p>
          </div>
        </div>
        <div className="buttonsDiv">
          <PresentationButtons type="buttonOne" text="Scan QR" />
          <PresentationButtons type="buttonTwo" text="Sign In / Sign Up" />
        </div>
      </div>
    </div>
  );
};
