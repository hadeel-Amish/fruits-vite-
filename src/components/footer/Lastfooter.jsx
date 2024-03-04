import React from "react";
import insta from "./../../assets/images/Insta.png";
import facebook from "./../../assets/images/Fb.png";
import Twiter from "./../../assets/images/Twiter.png";
import pin from "./../../assets/images/pin.png";
import logo from "./../../assets/images/Logo (1).png";
import "./Lastfooter.css";
function Lastfooter() {
  return (
    <div>
      <div className="colfooter">
        <div
          className="col"
          style={{ borderRight: "1px solid #9A9A9A", paddingRight: "20px" }}
        >
          <h2 className="h2">Contact Us</h2>
          <h4>Email</h4>
          <p>needhelp@Organia.com</p>
          <h4>Phone</h4>
          <p>666 888 888</p>
          <h4> Address</h4>
          <p>88 road, borklyn street, USA</p>
        </div>
        <div className="col">
          <div className="one">
            <img src={logo} alt="" />
            <h1>Organick</h1>
          </div>
          <p>Simply dummy text of the printing and typesetting industry.</p>
          <p>Lorem Ipsum simply dummy text of the printing</p>
          <div
            className="icone"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <img src={insta} alt="" />
            <img src={facebook} alt="" />
            <img src={pin} alt="" />
            <img src={Twiter} alt="" />
          </div>
        </div>
        <div
          className="col"
          style={{ borderLeft: "1px solid #9A9A9A", paddingLeft: "20px" }}
        >
          <h2 className="h2">Utility Pages</h2>
          <p>Style Guide</p>
          <p>404 Not Found</p>
          <p>Password Protected</p>
          <p>Licences</p>
          <p>Changelog</p>
        </div>
      </div>
      <hr />
      <div className="fot">
        <p>Copyright © Organick | Designed by VictorFlow Templates -</p>
        <p>Powered by Webflow</p>
      </div>
    </div>
  );
}

export default Lastfooter;
