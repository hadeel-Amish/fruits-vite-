import React from "react";
import "./Teamdata.css";
import insta from "./../../assets/images/Insta.png";
import facebook from "./../../assets/images/Fb.png";
import Twiter from "./../../assets/images/Twiter.png";
function Teamdata({ team }) {
  return (
    <div className="teamdata">
      <div className="imgteam">
        <img src={team.image} alt="" />
      </div>
      <div className="second">
        <div className="textteam">
          <h1>{team.name}</h1>
          <p>{team.career}</p>
        </div>
        <div className="iconsabout">
          <img src={insta} alt="" />
          <img src={facebook} alt="" />
          <img src={Twiter} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Teamdata;
