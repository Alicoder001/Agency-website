import styled from "styled-components";

export const HeaderStyled = styled.header`
  z-index: 4;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: var(--headerBg);
  backdrop-filter: var(--headerBlur);
  color: var(--textColor);

  .header-container {
    max-width: 140rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 1.8rem 2rem;
    align-items: center;
  }
  .burger-block {
    display: none;

    @media screen and (max-width: 768px) {
      display: flex;
      align-items: center;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .nav {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    @media screen and (max-width: 768px) {
      display: none;
    }
    &__link {
      font-size: 2rem;
      line-height: 2.4rem;
      color: var(--textColor);
      font-weight: 700;
      @media screen and (max-width: 1050px) {
        font-size: 1.8rem;
      }
      &:hover {
        color: #ac4cf5;
      }
    }
  }
  .activeBlock {
    display: flex;
    align-items: center;
  }
  .logo {
    display: flex;
    align-items: center;
  }
  .mode {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2.5rem;
    border-radius: 4rem;
    border: 1px solid #aaa;
    padding: 0.5rem;
    background: var(--modeBg);
    width: 97px;
    height: 42px;
    @media screen and (max-width: 768px) {
      display: none;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .mode-mobile {
    width: 3.6rem;
    height: 3.6rem;
    background: #5454d4;
    z-index: 0;
    border-radius: 50%;
    transition: 0.5s;
    align-items: center;
    justify-content: center;
    display: none;
    &:hover {
      cursor: pointer;
    }
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }
  .burger__nav {
    position: fixed;
    z-index: 7;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background: rgba(23, 25, 29, 0.9);
    display: none;
    flex-direction: column;
    align-items: center;
    transition: 0.5s;
    transform: translate(0, 0);
    &-header {
      width: 100%;
      height: 7.4rem;
      padding: 1.8rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4rem;
    }
    &-main {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 9.6rem;
    }
    &-number {
      padding: 2.2rem 4.4rem;
      border-radius: 14.1rem;
      background-color: #6911ad;

      &:hover {
        cursor: pointer;
      }
      h1 {
        font-size: 3.2rem;
        font-weight: 700;
        line-height: 3.9rem;
        color: white;
      }
    }
    .link-block {
      padding: 0 2rem;
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 3rem;
      align-items: flex-start;
    }
    .nav__link {
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 3.9rem;
      color: white;
      &:hover {
        color: #bd7af0;
      }
    }
    .trash {
      &:hover {
        cursor: pointer;
      }
    }
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }
  .iconBg {
    top: 2px;
    left: 2px;
    position: absolute;
    width: 3.6rem;
    height: 3.6rem;
    background: #5454d4;
    z-index: 0;
    border-radius: 50%;
    transition: 0.5s;
    transform: translate(0px, 0px);
  }
  .modeRight {
    transform: translate(55px, 0);
  }
  .contact {
    margin-left: 4rem;

    @media screen and (max-width: 1200px) {
      display: none;
    }
    &-text {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.7rem;
    }
    &-number {
      margin-bottom: 3px;
      font-size: 2rem;
      line-height: 2.4rem;
    }
  }
  .img {
    z-index: 2;
  }
  .btn {
    width: 16.8rem;
    height: 4.5rem;
    border-radius: 7px;
    background: #6911ad;
    color: white;
    font-size: 1.6rem;
    line-height: 1.9rem;
    border: none;
    margin-left: 3.1rem;
    @media screen and (max-width: 1000px) {
      display: none;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .visiblity {
    visibility: visible;
    @media screen and (max-width: 768px) {
      visibility: hidden;
    }
  }
  .showNav {
    transform: translate(-100%, 0);
  }
`;
