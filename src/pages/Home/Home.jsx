import React from "react";
import AboutComp from "../../components/Home/AboutComp/AboutComp";
import Advantage from "../../components/Home/Advantage/Advantage";
import Hero from "../../components/Home/Hero/Hero";
import News from "../../components/Home/News/News";
import OurServices from "../../components/Home/OurServices/OurServices";
import OurProjects from "../../components/OurProjects/OurProjects";
import { HomeStyled } from "./Home.styled";
import OurTeam from "../../components/Home/OurTeam/OurTeam";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";

const Home = () => {
  return (
    <HomeStyled>
      <Hero />
      <AboutComp />
      <Advantage />
      <OurProjects isHome={true} />
      <OurServices />
      <News />
      <OurTeam />
      <Contact />
    </HomeStyled>
  );
};

export default Home;
