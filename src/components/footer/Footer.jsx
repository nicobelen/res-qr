import React from "react";

export const Footer = () => {
  return (
    <div>
      <div>
        <h3>Services</h3>
        <a href="asd">Email Marketing</a>
        <a href="asd">Campaing</a>
        <a href="asd">Branding</a>
        <a href="asd">Offline</a>
      </div>
      <div>
        <h3>About</h3>
        <a href="asd">Our story</a>
        <a href="asd">Benefits</a>
        <a href="asd">Team</a>
        <a href="asd">Carreers</a>
      </div>
      <div>
        <h3>Legal</h3>
        <a href="asd">Terms & Conditions</a>
        <a href="asd">Privacy Policy</a>
        <a href="asd">Terms of use</a>
      </div>
      <div>
        <h3>Newsletter</h3>
        <label>Email</label>
        <input type="email" value="EMAIL" className="newsletter-box" />
        <input type="submit" value="SUBMIT" className="newletter-btn" />
      </div>
    </div>
  );
};
