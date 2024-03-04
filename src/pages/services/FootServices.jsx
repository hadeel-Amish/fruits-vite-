import React from "react";
import "./FootServices.css";
import foot from "./../../assets/images/bg-serv.png";
import video from "./../../assets/images/Video Icon.png";
function FootServices() {
  return (
    <div className="FootServices">
      <div className="foot">
        <img src={foot} alt="" />
      </div>
      <div className="text">
        <p>Organic Only</p>
        <h1>Everyday Fresh & Clean</h1>

        {/* <h5>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the.
        </h5> */}

        <div className="videoserv">
          <img src={video} alt="" className="video" />
        </div>
      </div>
    </div>
  );
}

export default FootServices;
