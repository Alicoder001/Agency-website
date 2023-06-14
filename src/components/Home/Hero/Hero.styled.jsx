import styled from "styled-components";
import heroBg from "../../../images/png/blurBghero.png";
import headerBg from "../../../images/png/blurBg.png";
import lineImg from "../../../images/png/heroLine.png";

export const HeroStyled = styled.section`
  padding: 8.4rem 0 12.1rem;
  background: ${`url( ${heroBg} )`}, ${`url( ${headerBg} )`},
    ${`url( ${lineImg} )`};
  background-repeat: no-repeat;
  background-position: left 0px bottom -200px, top 0px right 0px, center, center;
  background-size: auto, auto, cover, cover;
  .hero__info {
    margin-top: 22.8rem;
    @media screen and (max-width: 900px) {
      margin-top: 0;
    }
    @media screen and (max-width: 768px) {
      padding: 0 3rem;
    }
    @media screen and (max-width: 550px) {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }

  canvas {
    margin-top: 28.9rem;
    @media screen and (max-width: 900px) {
      margin-top: 4rem;
    }
  }
  .hero-container {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 900px) {
      flex-direction: column-reverse;
      align-items: center;
      gap: 6rem;
    }
  }
  .hero__title {
    max-width: 65rem;
    width: 100%;
    margin-bottom: 4rem;
    @media screen and (max-width: 450px) {
      text-align: center;
    }
  }
  .hero__subt {
    max-width: 54.9rem;
    width: 100%;
    line-height: 2.1rem;
    margin-bottom: 18rem;
    @media screen and (max-width: 550px) {
      max-width: none;
    }
  }
`;
