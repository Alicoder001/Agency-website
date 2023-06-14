import styled from "styled-components";

export const OurProjectsStyled = styled.section`
  margin-bottom: 8rem;
  .project-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h2 {
    margin-bottom: 4.2rem;
  }
  .nav {
    display: flex;
    gap: 6rem;
    padding: 1.6rem 5rem;
    border: var(--projectNavBorder);
    border-radius: 9rem;
    background: var(--projectNavBg);
    @media screen and (max-width: 900px) {
      gap: 4rem;
    }
    @media screen and (max-width: 768px) {
      gap: 3rem;
    }
    @media screen and (max-width: 650px) {
      display: none;
    }
    &-link {
      &:hover {
        cursor: pointer;
      }
    }
    margin-bottom: 4rem;
  }
  ul {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(39rem, 1fr));
    gap: 3rem;
    margin-bottom: 4rem;
    @media screen and (max-width: 1270px) {
      column-gap: 8rem;
    }
    @media screen and (max-width: 960px) {
      column-gap: 3rem;
    }
    @media screen and (max-width: 880px) {
      column-gap: 3rem;
      display: flex;
      flex-direction: column;
    }
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  li {
    @media screen and (max-width: 880px) {
      max-width: 60rem;
      width: 100%;
    }
  }
  .img-block {
    height: 100%;
    @media screen and (max-width: 668px) {
      max-width: 36.2rem;
      height: 100%;
    }
    width: 100%;
    overflow: hidden;
    position: relative;
    border-radius: 2rem;
    @media screen and (max-width: 880px) {
      max-width: 60rem;
      width: 100%;
    }
    &:hover {
      transition: 0.5s;
      border: var(--projectItemBorder);
    }
    .img {
      transition: 0.5s;
      height: 100%;
      object-position: contain;
    }
    .img-text {
      font-size: 2rem;
      font-weight: 700;
      line-height: 2.9rem;
      position: absolute;
      left: 3rem;
      bottom: -3rem;
      transform: translate(0, 0);
      transition: 0.3s;
      z-index: 3;
      color: white;
      &:hover {
        cursor: pointer;
        scale: 1.1;
      }
    }
    .strelka {
      height: 8.7rem;
      width: 8.7rem;
      position: absolute;
      right: 3rem;
      top: -9rem;
      transition: 0.3s;
      z-index: 3;
      &:hover {
        cursor: pointer;
        scale: 1.1;
      }
    }
    &:hover .img-text {
      transform: translate(0, -6rem);
    }
    &:hover .strelka {
      top: 1.5rem;
    }
    &:hover .img {
      scale: 1.1;
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border: 1.5rem solid transparent;
      transition: 0.5s;
    }
    &:hover.img-block::after {
      background: rgba(0, 0, 0, 0.87);
    }
  }
  .active {
    color: red;
  }
`;
