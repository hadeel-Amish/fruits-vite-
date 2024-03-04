import React from "react";
import econisimg from "./../../assets/images/Photo (1).png";
import "./Econis.css";
function Econis() {
  return (
    <div className="econis">
      <div className="imgeconis">
        <img src={econisimg} alt="" />
      </div>
      <div className="texteconis">
        <p>Eco Friendly</p>
        <h1>Econis is a Friendly Organic Store</h1>
        <div className="text">
          <h3>Start with Our Company First</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
        <div className="text">
          <h3>Learn How to Grow Yourself</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
        <div className="text">
          <h3>Farming Strategies of Today</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Econis;
