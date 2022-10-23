import "./Fashionable.css";
import img from "../../assets/imgs/HandQr.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import group1 from "../../assets/imgs/Group1.svg";
import scanelem from "../../assets/imgs/scan-elem.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Fashionable = () => {
  AOS.init();
  return (
    <div className="page">
      <div className="fashionable-backround">
        <div className="fashionable">
          <div className="fashionable__logo" data-aos="zoom-in-down">
              <img src={img} className="fashionable__logo--img" alt="img" />
          </div>
          <div className="fashionable__content" data-aos="zoom-out-right">
            <img src={scanelem} className="fashionable__content--svgGreen" alt="scanelem" />
            <h1 className="fashionable__content--title">Make it look fashionable</h1>
            <p className="fashionable__content--subtitle">
              If you are going to have it in your wallet everyday, might as well
              make it fancy. You can choose from an array of options whichever
              suits your style better.
            </p>
            <div className="fashionable__content--button" data-aos="zoom-out-right">
              <button>
                Try it now &nbsp; <ArrowRightOutlined />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="svgBackround" data-aos="fade-right">
          <img src={group1} alt="Group1" className="svgBackround__element"/>
        </div>
      </div>
    </div>
  );
};
