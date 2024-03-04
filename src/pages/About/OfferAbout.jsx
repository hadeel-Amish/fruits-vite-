import React from "react";
import "./OfferAbout.css";
import a from "./../../assets/images/145.png";
import b from "./../../assets/images/234.png";
import c from "./../../assets/images/777.png";
import d from "./../../assets/images/876.png";

function OfferAbout() {
  const offer = [
    {
      image: a,
      title: "Spicy",
    },
    {
      image: b,
      title: "Nuts & Feesd",
    },
    {
      image: c,
      title: "Fruits",
    },
    {
      image: d,
      title: "Vegetable",
    },
  ];
  return (
    <div className="offerAbout">
      <p>About Us</p>
      <h1 className="title">What We Offer for You</h1>
      <div className="perent">
        {offer.map((e) => {
          return (
            <div className="child" key={e.id}>
              <div className="imgg">
                <img src={e.image} alt="" />
              </div>
              <h1 className="h11">{e.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OfferAbout;
