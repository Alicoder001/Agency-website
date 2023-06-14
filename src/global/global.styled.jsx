import styled from "styled-components";

export const Globalstyled = styled.div`
  /* color: var(--textColor); */

  font-family: "Proxima Nova", sans-serif;
  color: var(--textColor);
  transition: 0.7s;
  font-size: 1.8rem;
  line-height: 2.5rem;
  font-weight: 400;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 550px) {
    font-size: 1.6rem;
    line-height: 1.9rem;
  }
  .container {
    max-width: 140rem;
    width: 100%;
    padding: 0 2rem;
    margin: 0 auto;
  }
  .nav__link {
    :hover {
      cursor: pointer;
    }
  }
  h1 {
    font-size: 4.8rem;
    line-height: 5.8rem;
    font-weight: 600;

    @media screen and (max-width: 900px) {
      font-size: 3.2rem;
      line-height: 3.5rem;
    }
  }
  h2 {
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 4.3rem;
    @media screen and (max-width: 900px) {
      font-size: 2.4rem;
      line-height: 3rem;
    }
  }
  h3 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
    @media screen and (max-width: 900px) {
      font-size: 2rem;
      line-height: 2.4rem;
    }
  }
`;
