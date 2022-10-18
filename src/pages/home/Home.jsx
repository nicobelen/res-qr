import React from "react";
import { Presentation } from "../../components/presentation/Presentation";
import { QuickScan } from "./../../components/scan/QuickScan";

export const Home = () => {
  return (
    <div>
      <Presentation />
      <QuickScan />
    </div>
  );
};
