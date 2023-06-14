import React from "react";
import { PortfolioStyled } from "./Portfolio.Styled";
import OurProjects from "../../components/OurProjects/OurProjects";
import Contact from "../../components/Contact/Contact";

const Portfolio = () => {

  return (
    <PortfolioStyled>
      <OurProjects isHome={false} />
      <Contact />
    </PortfolioStyled>
  );
};

export default Portfolio;
