import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./QuickScan.css";
import scanimg from "../../assets/imgs/image-removebg-preview1.png";
import group from "../../assets/imgs/Group.svg";
import scanelem from "../../assets/imgs/scan-elem.svg";

export const QuickScan = () => {
  return (
    <div className="group-div">
      <div className="quick-scan">
        <div className="text-div">
          <img src={scanelem} className="scanelem" alt="scanelem" />
          <div className="textsResp" data-aos="fade-up" data-aos-anchor-placement="center-center">
            <h1>Acces all the data with a quick scan</h1>
            <p>
              All the medical information will be available just by scanning the
              code. Ranging from your emergency contacts to the allergies or
              conditions have. Confidencial data will not be shown here.
            </p>
          </div>
          <div className="buttonClass" data-aos="fade-right">
            <button>
              Get Started &nbsp; <ArrowRightOutlined />{" "}
            </button>
          </div>
        </div>
        <div className="img-quick">
          <img src={scanimg} alt="" />
        </div>
      </div>
      <img src={group} className="group" alt="Group" />
    </div>
  );
};
