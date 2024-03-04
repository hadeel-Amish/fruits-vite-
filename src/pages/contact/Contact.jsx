import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import conactimg from "./../../assets/images/bg-6.png";
import Section from "../../components/section/Section";
import panana from "./../../assets/images/44.jpg";
import imgicon1 from "./../../assets/images/Group 15.jpg";
import imgicon2 from "./../../assets/images/Group 16.png";
import insta from "./../../assets/images/Insta.png";
import facebook from "./../../assets/images/Fb.png";
import Twiter from "./../../assets/images/Twiter.png";
import pin from "./../../assets/images/pin.png";
import Footer from "../../components/footer/Footer";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <Navbar
        menu={[
          { title: "Home", path: "/" },
          { title: "About", path: "/about" },
          { title: "Services", path: "/services" },
          { title: "Shop", path: "/shop" },
          { title: "OurTeam", path: "/ourteam" },
          { title: "Contact", path: "/contact" },
        ]}
      />
      <Hero img={conactimg} title="Contact Us" />
      <Section
        img={panana}
        title="We'd love to talk about how we can work together."
        des="Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
        imgicon1={imgicon1}
        imgicon2={imgicon2}
        texticontitle1="Massege"
        texticontitle2=" Contact Us"
        texticonpara1="support@organic.com"
        texticonpara2="+01 123 456 789"
        insta={insta}
        showButton={false}
        facebook={facebook}
        Twiter={Twiter}
        pin={pin}
        showicon={true}
        showsoical={true}
        showinput={false}
      />
      <div className="forms">
        <form action="">
          <div className="input">
            <div className="one">
              <div className="col">
                <label>Full Name*</label>
                <input type="text" placeholder="your name" />
              </div>
              <div className="col">
                <label> Your Email*</label>
                <input type="email" placeholder="example@yourmail.com" />
              </div>
            </div>
            <div className="one">
              <div className="col">
                <label>Company*</label>
                <input type="text" placeholder="yourcompany name here" />
              </div>
              <div
                className="col"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label> Subject*</label>
                <input type="text" placeholder="how can we help" />
              </div>
            </div>
            {/* <div className=" textarea">
              <label htmlFor=""> Message*</label>
              <textarea placeholder="hello there,i would like to talk about how to..."></textarea>
            </div> */}
            <div
              className="bt"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button>send meesage</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
