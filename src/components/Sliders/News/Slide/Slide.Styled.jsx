import styled from "styled-components";

export const SlideStyled = styled.div`
  background: var(--servicesBg);
  border: var(--servicesBorder);
  backdrop-filter: blur(1px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  text-align: start;
  img {
    width: 100%;
  }
  .news-info {
    padding: 2rem 3rem 2.4rem;
  }
  h4 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    line-height: 2.4rem;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.8rem;
    margin-bottom: 2.1rem;
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
