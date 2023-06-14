import styled from "styled-components";

export const SlideStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
  }
  .news-info {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: -3.3rem;

    padding: 1.5rem 4.9rem 1.1rem;
    /* margin-left: 1.1rem;
    margin-left: 1.1rem; */
    background: var(--servicesBg);
    border: var(--servicesBorder);
    backdrop-filter: blur(1px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 20px;
  }
  h3 {
    margin-bottom: 0.7rem;
    font-size: 2.4rem;
    line-height: 2.9rem;
    font-weight: 600;
  }
  hr {
    width: 100px;
    margin-bottom: 0.7rem;

    border: var(--timeLine);
  }
  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    font-style: italic;
  }
`;
