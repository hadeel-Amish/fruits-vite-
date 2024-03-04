import React from "react";
import imgfooter from "./../../assets/images/newslatter.png";
import "./Footer.css";
// import insta from "./../../assets/images/Insta.png";
// import facebook from "./../../assets/images/Fb.png";
// import Twiter from "./../../assets/images/Twiter.png";
// import pin from "./../../assets/images/pin.png";
// import logo from "./../../assets/images/Logo (1).png";
import Lastfooter from "./Lastfooter";
function Footer() {
  return (
    <div className="footer">
      <div className="herofooter">
        <img src={imgfooter} alt="" />
        <div className="sec">
          <div className="h1">
            <h1>Subscribe to our Newsletter</h1>
          </div>
          <form action="" className="form">
            <input type="text" id="input" placeholder="Your Email Address" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>

      <Lastfooter />
    </div>
  );
}

export default Footer;
