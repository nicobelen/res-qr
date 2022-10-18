import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./QuickScan.css";
import scanimg from "../../assets/imgs/image-removebg-preview1.png";
import group from "../../assets/imgs/Group.svg";

export const QuickScan = () => {
  return (
    <div className="group-div">
      <div className="quick-scan">
        <div className="text-div">
          <h1>Acces all the data with a quick scan</h1>
          <p>
            All the medical information will be available just by scanning the
            code. Ranging from your emergency contacts to the allergies or
            conditions have. Confidencial data will not be shown here.
          </p>
          <button>
            Get Started &nbsp; <ArrowRightOutlined />{" "}
          </button>
        </div>
        <div>
          <img src={scanimg} alt="" />
        </div>
      </div>
      <img src={group} className="group" alt="Group" />
    </div>
  );
};
