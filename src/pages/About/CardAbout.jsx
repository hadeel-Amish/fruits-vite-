import React from "react";
import oneabout from "./../../assets/images/Return Purchase.png";
import twoabout from "./../../assets/images/Icon (1).png";
import threeabout from "./../../assets/images/Icon (2).png";
import fourabout from "./../../assets/images/Icon (3).png";
import "./CardAbout.css";

function CardAbout() {
  const cardabout = [
    {
      image: oneabout,
      title: "Return Policy",
      para: "Simply dummy text of the printintypesetting industry.",
    },
    {
      image: twoabout,
      title: "100% Fresh",
      para: "Simply dummy text of the printintypesetting industry.",
    },
    {
      image: threeabout,
      title: "Support 24/7",
      para: "Simply dummy text of the printintypesetting industry.",
    },
    {
      image: fourabout,
      title: "Secured Payment",
      para: "Simply dummy text of the printintypesetting industry.",
    },
  ];
  return (
    <div>
      <div className="cardabout">
        {cardabout.map((e) => {
          return (
            <div className="card" key={e.id}>
              <div className="carddd" style={{ marginTop: "30px" }}>
                <div className="image">
                  <img src={e.image} alt="" />
                </div>
                <h1>{e.title}</h1>
                <p>{e.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardAbout;
