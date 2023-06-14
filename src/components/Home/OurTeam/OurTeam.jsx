import React from "react";
import { OurTeamStyled } from "./OurTeam.Styled";
import Slider from "../../Sliders/OurTeam/Slider/Slider";
const OurTeam = () => {
  return (
    <OurTeamStyled>
      <div className="team-container">
        <h2>Blog yangiliklarimiz</h2>
        <Slider />
      </div>
    </OurTeamStyled>
  );
};

export default OurTeam;
