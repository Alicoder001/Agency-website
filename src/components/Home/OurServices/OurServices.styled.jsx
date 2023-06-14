import styled from "styled-components";

export const OurServicesStyled = styled.section`
  margin-bottom: 12rem;
  .service-container {
    max-width: 140rem;
    width: 100%;
    padding: 0 2rem;
    margin: 0 auto;
  }
  .block {
    padding: 4rem 12.1rem 9rem;
    background: var(--servicesBg);
    border: var(--servicesBorder);
    backdrop-filter: blur(1px);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 900px) {
      padding: 4rem 2rem 9rem;
    }
  }
  h2 {
    margin-bottom: 8.2rem;
  }
  ul {
    width: 100%;
    display: grid;
    justify-content: space-between;
    align-items: center;
    column-gap: 3rem;
    row-gap: 12.1rem;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    @media screen and (max-width: 1280px) {
      grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    }
    @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
    }
  }

  li {
    text-align: center;

    @media screen and (max-width: 900px) {
      max-width: 30rem;
      width: 100%;
    }
  }
  img {
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 3.8rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 2rem;
    line-height: 2.8rem;
    letter-spacing: -0.75px;
    font-weight: 400;
  }
`;
