import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import servicesimg from "./../../assets/images/bg-4.png";
// import Footer from "../../components/footer/Footer";
import Lastfooter from "../../components/footer/Lastfooter";
import SectionTow from "./SectionTow";
import FootServices from "./FootServices";

function Services() {
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
      <Hero img={servicesimg} title=" Services" />
      <SectionTow />
      <FootServices />
      <Lastfooter />
    </div>
  );
}

export default Services;
