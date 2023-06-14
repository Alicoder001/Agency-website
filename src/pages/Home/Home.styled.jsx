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
export const HomeStyled = styled.main`
  flex-grow: 1;
  padding-bottom: 34.5rem;
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
  background-position: top 154.4rem center, top 335.6rem center,
    top 577.1rem center, bottom 0rem center, top 432.6rem center,
    top 66rem left 0, top 122.4rem right 0, top 234.1rem left 0,
    top 206.2rem right 0, top 363rem left 0, top 518.2rem left 0,
    top 493.5rem right 0, center;
`;
