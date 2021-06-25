import React from "react";
import Navbar from "./navbar";
import Slogan from "./slogan";
import Shorten from "./shorten";
import AdvancedStatistics from "./advancedStatistics";
import BoostLinks from "./boostLinks";
import Footer from "./footer";

function MyApp() {
  return (
    <>
      <Navbar />
      <Slogan />
      <Shorten />
      <AdvancedStatistics />
      <BoostLinks />
      <Footer />
    </>
  );
}

export default MyApp;
