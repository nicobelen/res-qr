import React from "react";
import { AboutUs } from "../../components/aboutus/AboutUs";
import { Fashionable } from "../../components/fashionable/Fashionable";
import { Footer } from "../../components/footer/Footer";
import { Presentation } from "../../components/presentation/Presentation";
import { QuickScan } from "./../../components/scan/QuickScan";

export const Home = () => {
  return (
    <div>
      <Presentation />
      <QuickScan />
      <Fashionable />
      <AboutUs />
      <Footer />
    </div>
  );
};
