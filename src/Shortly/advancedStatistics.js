import React from "react";
import brand from "../images/icon-brand-recognition.svg";
import records from "../images/icon-detailed-records.svg";
import customize from "../images/icon-fully-customizable.svg";
import "./advancedStatistics.css";

function AdvancedStatistics() {
  return (
    <div className="stats">
      <div className="info">
        <h1>Advanced Statistics</h1>
        <p>Track how your links are performing across the web with</p>
        <p>our advanced statistics dashboard.</p>
      </div>

      <div className="container">
        <div className="cont1 cont">
          <div className="back">
            <img src={brand}></img>
          </div>

          <h3>Brand Recognition</h3>

          <p>Boost your bran d recognition with </p>
          <p>each click. Generic links don't mean a</p>
          <p>thing. Branded links help instil</p>
          <p>confidence in your content.</p>
        </div>

        <div className="line"></div>

        <div className="cont2 cont">
          <div className="back">
            <img src={records}></img>
          </div>

          <h3>Detailed Records</h3>

          <p>Gain insights into who is clicking your</p>
          <p>links. Knowing when and where</p>
          <p>people engage with your content</p>
          <p>helps inform better decisions.</p>
        </div>

        <div className="line"></div>

        <div className="cont3 cont">
          <div className="back">
            <img src={customize}></img>
          </div>

          <h3>Fully Customizable</h3>

          <p>Improve brand awarness and</p>
          <p>content discoverability through</p>
          <p>customizable links, superchanging</p>
          <p>audience engagement.</p>
        </div>
      </div>
    </div>
  );
}

export default AdvancedStatistics;
