import React from "react";
import "./Organic.css";
import one from "./../../assets/images/2.png";
import two from "./../../assets/images/3.png";
import three from "./../../assets/images/1.png";

function Organic() {
  const organic = [
    {
      image: one,
      title: "Organic Food",
    },
    {
      image: two,
      title: "Organic Juice",
    },
    {
      image: three,
      title: "Nuts Cookis",
    },
  ];

  return (
    <div className="organic">
      {organic.map((e) => {
        return (
          <div className="cardorgic" key={e.id}>
            <img src={e.image} alt="" />
            <div className="dev">
              <h1>{e.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Organic;
