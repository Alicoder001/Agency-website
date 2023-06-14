import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  background: var(--footerBg);
  border-top: var(--footerBorder);
  backdrop-filter: blur(1px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px 20px 0px 0px;
  padding: 8rem 0rem;
  color: var(--footerColor);
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 6%;
  margin-top: -22.5rem;
  @media screen and (max-width: 900px) {
    margin-top: -25.7rem;
  }
  @media screen and (max-width: 850px) {
    margin-top: -30.2rem;
  }
  @media screen and (max-width: 768px) {
    margin-top: -39.3rem;
  }
  @media screen and (max-width: 550px) {
    margin-top: -41.2rem;
  }
  @media screen and (max-width: 415px) {
    margin-top: -43.2rem;
  }
  @media screen and (max-width: 350px) {
    margin-top: -45.2rem;
  }
  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  .logo {
    img {
      @media screen and (max-width: 1100px) {
        width: 10rem;
      }
      @media screen and (max-width: 768px) {
        width: 15.9rem;
      }
    }
  }
  .address {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    justify-content: space-between;
  }
  .addressBlock {
    @media screen and (max-width: 1100px) {
      max-width: 30rem;
      width: 100%;
    }
    @media screen and (max-width: 900px) {
      max-width: 20rem;
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      max-width: none;
      width: 100%;
    }
    display: flex;
    flex-direction: column;
  }
  .call {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.5rem;
  }
  .callBlock {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    img {
      width: 1.4rem;
    }
  }
  .social {
    display: flex;
    gap: 2.5rem;
    @media screen and (max-width: 850px) {
      flex-direction: column;
    }
    @media screen and (max-width: 768px) {
      flex-direction: row;
    }
  }
  .footer-block {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 17rem;
  }
`;
