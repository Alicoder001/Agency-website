import styled from "styled-components";

export const AboutCompStyled = styled.section`
  padding-top: 12rem;
  margin-bottom: 9.5rem;
  .aboutComp-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
    @media screen and (max-width: 600px) {
      justify-content: center;
      
    }
  }
  .info {
    max-width: 56.9rem;
    width: 100%;
    &-title {
      font-size: 5rem;
      line-height: 6.4rem;
      margin-bottom: 2rem;
      @media screen and (max-width: 900px) {
        font-size: 2.4rem;
        line-height: 3rem;
      }
    }
  }

  .category {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    @media screen and (max-width: 800px) {
      width: 100%;
      padding: 0 8rem;
      gap: 3rem;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
      padding: 0;
    }

    &-block {
      width: 100%;
      display: flex;
      gap: 14rem;
      justify-content: space-between;
      text-align: center;
      @media screen and (max-width: 1000px) {
        gap: 4rem;
      }
      @media screen and (max-width: 800px) {
        width: 100%;
      }
    }
    &-title {
      font-size: 5rem;
      line-height: 5rem;
      background: linear-gradient(
        109.09deg,
        rgba(0, 40, 248, 0.89) 0%,
        #6911ad 100%
      );
      @media screen and (max-width: 900px) {
        font-size: 3.6rem;
        line-height: 3.6rem;
      }
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 600;
      margin-bottom: 1.2rem;
    }
  }
`;
