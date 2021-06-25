import React from "react";
import "./slogan.css";
import logo from "../images/illustration-working.svg";

function Slogan() {
  return (
    <div className="slogan">
      <div className="moto">
        <h1>More than just</h1>
        <h1>shorter links</h1>

        <p>Build your brand's recognition and get detailed</p>
        <p>insights on how your links are performing</p>

        <button className="btn">Get Started</button>
      </div>

      <div className="sloganLogo">
        <img src={logo}></img>
      </div>
    </div>
  );
}

export default Slogan;
