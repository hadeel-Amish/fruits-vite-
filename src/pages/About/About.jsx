import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import aboutimg from "./../../assets/images/bg-2.png";
import Section from "../../components/section/Section";
import aboutsection from "./../../assets/images/34.png";
import Footer from "../../components/footer/Footer";
import CardAbout from "./CardAbout";
import Team from "./Team";
import OfferAbout from "./OfferAbout";

function About() {
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
      <Hero img={aboutimg} title="About Us" />

      <Section
        img={aboutsection}
        title="We do not buy from the open market & traders."
        para="Why Choose us?"
        des="Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
        showButton={false}
        reverce={true}
        showicon={false}
        h1input="100% Natural Product"
        h2input=" Increases resistance"
        p1about="Simply dummy text of the printing and typesetting industry Lorem Ipsum"
        p2about="Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing"
        showsoical={false}
        showinput={true}
      />
      <CardAbout />
      <Team />
      <OfferAbout />
      <Footer />
    </div>
  );
}

export default About;
