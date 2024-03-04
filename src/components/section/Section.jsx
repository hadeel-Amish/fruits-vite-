import React from "react";
import "./Section.css";

function Section({
  img,
  para,
  title,
  des,
  texticonpara1,
  texticonpara2,
  texticontitle1,
  texticontitle2,
  imgicon1,
  imgicon2,
  btn,
  Vector,
  showButton,
  insta,
  facebook,
  Twiter,
  pin,
  reverce,
  showicon,
  h1input,
  h2input,
  p1about,
  p2about,
  showsoical,
  showinput,
}) {
  return (
    <div className="perent">
      <div
        className="container"
        style={{ flexDirection: reverce ? "row-reverse" : "row" }}
      >
        <div className="img" style={{ width: "50%" }}>
          <img src={img} alt="" />
        </div>
        <div className="info" style={{ width: "50%" }}>
          <div className="text">
            <p className="para">{para}</p>
            <h1 className="title">{title}</h1>
            <p className="des">{des}</p>
          </div>
          {showicon && (
            <div className="icons">
              <div className="icon">
                <div className="imgicon1">
                  <img src={imgicon1} alt="" />
                </div>
                <div className="texticon">
                  <h1 className="texticontitle1">{texticontitle1}</h1>
                  <p className="texticonpara">{texticonpara1}</p>
                </div>
              </div>
              <div className="icon">
                <div className="imgicon2">
                  <img src={imgicon2} alt="" />
                </div>
                <div className="texticon">
                  <h1 className="texticontitle2">{texticontitle2}</h1>
                  <p className="texticonpara">{texticonpara2}</p>
                </div>
              </div>
            </div>
          )}
          {showButton && (
            <div className="btnn">
              <a href="">{btn}</a>
              <div className="icon">
                <img src={Vector} alt="" className="Vector" />
              </div>
            </div>
          )}
          {showsoical && (
            <div className="soical">
              <img src={insta} />
              <img src={facebook} />
              <img src={Twiter} />
              <img src={pin} />
            </div>
          )}
          {showinput && (
            <div className="about">
              <div className="aboutflex">
                <div className="input">
                  <div className="circal"></div>
                  <h1>{h1input}</h1>
                </div>
                <p>{p1about}</p>
              </div>
              <div className="aboutflex">
                <div className="input">
                  <div className="circal"></div>
                  <h1>{h2input}</h1>
                </div>
                <p>{p2about}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Section;
