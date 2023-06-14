import styled from "styled-components";
import mainBg from "../../images/svg/mainBgD.svg";
import light from "../../images/svg/lightt.svg";
import blurBgMainLeft from "../../images/png/blurBgMainLeft.png";
import homeLine from "../../images/png/homeLine.png";
import homeLineLight from "../../images/png/homeLineLight.png";
import blurBgMainRIght from "../../images/png/blurBgMainRIght.png";
import serviceLine from "../../images/png/serviceLine.png";
import serviceLineLight from "../../images/png/serviceLineLight.png";
import newsBg from "../../images/png/newsBg.png";
import newsBgLight from "../../images/png/newsBgLight.png";
import servicesBg from "../../images/png/servicesBg.png";
import teamBgLeft from "../../images/svg/teamBgLeft.svg";
import teamBgRight from "../../images/svg/teamBgRight.svg";
import contactLines from "../../images/png/contactLines.png";
import contactLinesLight from "../../images/png/contactLinesLight.png";
import footerLIne from "../../images/svg/footerLIne.svg";
import footerLIneLight from "../../images/png/footerLIneLight.png";
export const ServicesStyled = styled.div`
  position: relative;
  flex-grow: 1;
  padding-bottom: 34.5rem;
  padding-top: 12.1rem;
  @media screen and (max-width: 900px) {
    padding-bottom: 37.7rem;
  }
  @media screen and (max-width: 850px) {
    padding-bottom: 42.2rem;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 51.3rem;
  }
  @media screen and (max-width: 550px) {
    padding-bottom: 53.2rem;
  }
  @media screen and (max-width: 415px) {
    padding-bottom: 55.2rem;
  }
  background: ${(props) =>
    props.theme.mode === "dark"
      ? ` ${`url(${homeLine})`}, ${`url(${serviceLine})`},
    ${`url(${contactLines})`}, ${`url(${footerLIne})`}, ${`url(${newsBg})`},
    ${`url(${blurBgMainLeft})`}, ${`url(${blurBgMainRIght})`},
    ${`url(${teamBgLeft})`}, ${`url(${teamBgRight})`}, ${`url(${servicesBg})`},
    ${`url(${teamBgLeft})`}, ${`url(${teamBgRight})`}, ${`url(${mainBg})`},
    var(--mainBg)`
      : ` ${`url(${homeLineLight})`}, ${`url(${serviceLineLight})`},
    ${`url(${contactLinesLight})`}, ${`url(${footerLIneLight})`}, ${`url(${newsBgLight})`},
    ${`url(${blurBgMainLeft})`}, ${`url(${blurBgMainRIght})`},
    ${`url(${teamBgLeft})`}, ${`url(${teamBgRight})`}, ${`url(${servicesBg})`},
    ${`url(${teamBgLeft})`}, ${`url(${teamBgRight})`}, ${`url(${light})`},
    var(--mainBg)`};

  background-size: contain, contain, contain, contain, contain, auto, auto, auto,
    auto, auto, auto, auto, cover;
  @media screen and (max-width: 1300px) {
    background-size: auto, auto, auto, auto, auto, auto, auto, auto, auto, auto,
      auto, auto, cover;
  }
  background-repeat: no-repeat;
  background-position: top 64.4rem center, top 216rem center,
    top 287.1rem center, bottom 539rem center, top 322.6rem center,
    top -24rem left 0, top 32.4rem right 0, top 144.1rem left 0,
    top 116.2rem right 0, top 2753rem left 0, top 428.2rem left 0,
    top 403.5rem right 0, center;
  .services-container {
    position: relative;
    max-width: 140rem;
    width: 100%;
    padding: 0 2rem;
    padding-right: 36.7rem;
    margin: 0 auto;
    display: flex;
    gap: 3rem;
    @media screen and (max-width: 1200px) {
      padding-right: 30rem;
    }
    @media screen and (max-width: 900px) {
      padding-right: 24rem;
    }
    @media screen and (max-width: 820px) {
      padding-right: 20rem;
    }
    @media screen and (max-width: 768px) {
      padding-right: 2rem;
    }
  }
`;
