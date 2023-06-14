import styled from "styled-components";

export const AdvantageStyled = styled.section`
  margin-bottom: 12rem;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
    gap: 3rem;
    @media screen and (max-width: 550px) {
      grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    }
  }

  li {
    border: var(--advantageItemBorder);
    border-radius: 2rem;
    background-color: var(--advantageItemBg);
    backdrop-filter: blur(2.5px);
    padding: 2.4rem;
  }
  img {
    margin: 0.6rem;
    margin-bottom: 3rem;
    @media screen and (max-width: 550px) {
      width: 5rem;
      height: 5rem;
      margin-bottom: 2rem;
    }
  }
  h2 {
    text-align: center;
    margin-bottom: 4rem;
  }

  h3 {
    margin-bottom: 1rem;
  }
  hr {
    width: 5rem;
    height: 0.3rem;
    background-color: #686464;
    margin-bottom: 1.5rem;
    border: none;
    border-radius: 20px;
  }
  p {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }
`;
