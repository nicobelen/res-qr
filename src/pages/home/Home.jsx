import React from "react";
import { Fashionable } from "../../components/fashionable/Fashionable";
import { Presentation } from "../../components/presentation/Presentation";
import { QuickScan } from "./../../components/scan/QuickScan";

export const Home = () => {
  return (
    <div>
      <Presentation />
      <QuickScan />
      <Fashionable />
    </div>
  );
};
