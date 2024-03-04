import React, { useEffect, useState } from "react";
import datateam from "./aboutdata.json";
import Teamdata from "./Teamdata";
import "./Team.css";
function Team() {
  console.log(datateam);
  const [team, setTeam] = useState([]);
  useEffect(() => {
    const filterdata = datateam.Person.slice(0, 3);
    setTeam(filterdata);
  }, []);
  return (
    <div className="team">
      <h5 className="h5team">Team</h5>
      <h1 className="hteam">Our Organic Experts</h1>
      <p className="pteam">
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley.
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
  );
}

export default Team;
