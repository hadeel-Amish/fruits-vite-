import React from "react";
import Navbar from "../navbar/Navbar";
// import Hero from "../hero/Hero";
import homeimg from "./../../assets/images/bg-1.png";
import "./Home.css";
import Vector from "./../../assets/images/Vector.png";
import sec1 from "./../../assets/images/sec-1-2.png";
import sec2 from "./../../assets/images/sec-1-1.png";
import Section from "../section/Section";
import orange from "./../../assets/images/Photo.png";
import imgicon1 from "./../../assets/images/Group 55.png";
// import imgicon1 from "./../../assets/images/Icon.png";
import imgicon2 from "./../../assets/images/Mailbox Quality.png";
import Prodaucts from "../prodoucts/Prodaucts";
import Offer from "../offer/Offer";
import Econis from "../Econis/Econis";
import Organic from "../Organic/Organic";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div className="home">
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
      <div className="hero">
        <img src={homeimg} alt="" className="imghome" />
        <div className="titlehome">Choose the best healthier way of life</div>
      </div>
      <div className="btn">
        <a href="">Explore Now</a>
        <div className="icon">
          <img src={Vector} alt="" className="Vector" />
        </div>
      </div>
      <div
        className="section"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "8px",
          padding: "8px",
        }}
      >
        <div className="card">
          <img src={sec1} className="secimg" />
          <div className="textcard">
            <p className="pYellowtail">Natural!!</p>
            <h1 className="titlesec1">Get Garden Fresh Fruits</h1>
          </div>
        </div>
        <div className="card">
          <img src={sec2} className="secimg" />
          <div className="textcard">
            <p className="pYellowtail">Offer!!</p>
            <h1 className="titlesec2">Get 10% off on Vegetables</h1>
          </div>
        </div>
      </div>
      <Section
        img={orange}
        title="We Believe in Working Accredited Farmers"
        para="About Us"
        des="Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
        imgicon1={imgicon1}
        imgicon2={imgicon2}
        texticontitle1="Organic Foods Only"
        texticontitle2="Quality Standards"
        texticonpara1="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        texticonpara2="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        btn="Shop Now"
        Vector={Vector}
        showButton={true}
        showicon={true}
        showsoical={false}
        showinput={false}
      />
      <Prodaucts />
      <Offer />
      <Econis />
      <Organic />
      <Footer />
    </div>
  );
}

export default Home;
