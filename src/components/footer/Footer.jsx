import React from "react";
import "./Footer.css";
import elem from "../../assets/imgs/text-elem.svg";

export const Footer = () => {
  return (
    <div className="background-div">
      <div className="footer-div">
        <div className="links-div">
          <img src={elem} className="Elem" alt="Elem" />
          <h3>Githubs</h3>
          <div className="listing-div">
            <a href="https://github.com/cabreraezequiel">Ezequiel Cabrera</a>
            <a href="https://github.com/Martinliporace">Martin Liporace</a>
            <a href="https://github.com/Vinill">Daniel Muller</a>
            <a href="https://github.com/nicobelen">Nicolas Belen</a>
            <a href="https://github.com/Dak4rPrO">Mauricio Miranda</a>
          </div>
        </div>
        <div className="links-div">
          <img src={elem} className="Elem" alt="Elem" />
          <h3>ResQR</h3>
          <div className="listing-div">
            <a href="https://github.com/orgs/ResQR/repositories">Github</a>
            <a href="asd">Instagram</a>
            <a href="asd">Twitter</a>
          </div>
        </div>
        <div className="links-div">
          <img src={elem} className="Elem" alt="Elem" />
          <h3>Technologies</h3>
          <div className="listing-div">
            <a href="https://es.reactjs.org">React</a>
            <a href="https://getbootstrap.com">Bootstrap</a>
            <a href="https://animaticss.com/articulo/que-es-bem-css/">BEM methodology</a>
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
