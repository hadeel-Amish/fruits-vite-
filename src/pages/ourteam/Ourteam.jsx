import React, { useEffect, useState } from "react";
import teamimg from "./../../assets/images/bg-5.png";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import Team from "../About/Team";
import datateam from "../About/aboutdata.json";
import Teamdata from "../About/Teamdata";
function Ourteam() {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    const filterdata = datateam.Person.slice(0, 6);
    setTeam(filterdata);
  }, []);
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
      <Hero img={teamimg} title="Our Team" />
      <div className="team">
        <h5 className="h5team">Team</h5>
        <h1 className="hteam">Our Organic Experts</h1>
        <p className="pteam">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <div className="cardteam">
          {team.map((product, index) => {
            return (
              <div key={index.id}>
                <Teamdata team={product} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ourteam;
