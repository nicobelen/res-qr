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
    <div className="group-div">
      <div className="fashionable">
        <div className="fashionableContent">
          <div className="img">
            <div data-aos="fade-up-right">
              <img src={img} className="logo" alt="img" />
            </div>
          </div>
          <div className="texts" data-aos="zoom-in-left">
            <img src={scanelem} className="scanelem2" alt="scanelem" />
            <h1 className="fashionableTitle">Make it look fashionable</h1>
            <p className="fashionableSubtitle">
              If you are going to have it in your wallet everyday, might as well
              make it fancy. You can choose from an array of options whichever
              suits your style better.
            </p>
            <div className="buttonPage" data-aos="zoom-out-right">
              <button>
                Try it now &nbsp; <ArrowRightOutlined />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-down-left">
        <img src={group1} className="group1" alt="Group1" />
      </div>
    </div>
  );
};
