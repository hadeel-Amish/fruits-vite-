import React from "react";
import "./Hero.css";

function Hero({ img, title }) {
  return (
    <div>
      <img src={img} className="mainimg" />
      <h1 className="maintitle">{title}</h1>
    </div>
  );
}

export default Hero;
