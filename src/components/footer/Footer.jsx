import React from "react";
import "./Footer.css";
import elem from "../../assets/imgs/text-elem.svg";

export const Footer = () => {
  return (
    <div className="background-div">
      <div className="footer-div">
        <div className="links-div">
          <img src={elem} className="Elem" alt="Elem" />
          <h3>Services</h3>
          <div className="listing-div">
            <a href="asd">Email Marketing</a>
            <a href="asd">Campaing</a>
            <a href="asd">Branding</a>
            <a href="asd">Offline</a>
          </div>
        </div>
        <div className="links-div">
          <img src={elem} className="Elem" alt="Elem" />
          <h3>About</h3>
          <div className="listing-div">
            <a href="asd">Our story</a>
            <a href="asd">Benefits</a>
            <a href="asd">Team</a>
            <a href="asd">Carreers</a>
          </div>
        </div>
        <div className="links-div">
          <img src={elem} className="Elem" alt="Elem" />
          <h3>Legal</h3>
          <div className="listing-div">
            <a href="asd">Terms & Conditions</a>
            <a href="asd">Privacy Policy</a>
            <a href="asd">Terms of use</a>
          </div>
        </div>
        <div className="newsletter-div">
          <img src={elem} className="Elem" alt="Elem" />
          <h3>Newsletter</h3>
          <div className="label-div">
            <label>Email</label>
          </div>
          <input type="email" name="EMAIL" className="newsletter-box" />
          <input type="submit" value="SUBMIT" className="newsletter-btn" />
        </div>
      </div>
    </div>
  );
};
