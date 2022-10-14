import React from "react";
import "./PresentationButtons.css";
import { ArrowRightOutlined } from "@ant-design/icons";

export const PresentationButtons = ({ type, text }) => {
  return (
    <button className={type}>
      {text} &nbsp; <ArrowRightOutlined />{" "}
    </button>
  );
};
