import React from "react";
import "./SectionTow.css";
import image from "./../../assets/images/Photo-6-removebg-preview 1.png";
import milk from "./../../assets/images/Milk Bottle.png";
import Store from "./../../assets/images/Online Store.png";
import Delivery from "./../../assets/images/Delivery.png";
import level from "./../../assets/images/Icon (4).png";
import Bag from "./../../assets/images/Vegetables Bag.png";
import Radish from "./../../assets/images/Radish.png";

function SectionTow() {
  const one = [
    {
      img: milk,
      title: "Dairy Products",
      para: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis",
    },
    {
      img: Store,
      title: "Store Services",
      para: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis",
    },
    {
      img: Delivery,
      title: "Delivery Services",
      para: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis",
    },
  ];
  const two = [
    {
      img: level,
      title: "Agricultural Services",
      para: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis",
    },
    {
      img: Bag,
      title: "Organic Products",
      para: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis",
    },
    {
      img: Radish,
      title: "Fresh Vegetables",
      para: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis",
    },
  ];
  return (
    <div className="SectionTow">
      <p className="mainpar">What we Grow</p>
      <h1 style={{ marginBottom: "20px" }}>
        Better Agriculture for Better Future
      </h1>
      <div className="flex">
        <div className="one" style={{ textAlign: "end" }}>
          {one.map((e) => {
            return (
              <div className="childcard" key={e.id}>
                <img src={e.img} alt="" />
                <h3>{e.title}</h3>
                <p className="paraaaa">{e.para}</p>
              </div>
            );
          })}
        </div>
        <div className="center" style={{ height: "100%" }}>
          <img
            src={image}
            alt=""
            style={{ height: "100vh", maxWidth: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="one">
          {two.map((e) => {
            return (
              <div className="childcard" key={e.id}>
                <img src={e.img} alt="" />
                <h3>{e.title}</h3>
                <p className="para"> {e.para}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SectionTow;
