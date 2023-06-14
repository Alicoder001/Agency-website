import styled from "styled-components";

export const ServicesItemStyled = styled.div`
  max-width: 31.7rem;
  width: 100%;
  position: absolute;
  top: 0;
  right: 2rem;
  @media screen and (max-width: 1200px) {
    max-width: 25rem;
  }
  @media screen and (max-width: 900px) {
    max-width: 20rem;
  }
  @media screen and (max-width: 820px) {
    max-width: 17rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  .itemList {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .item {
    background: var(--servicesBg);
    border: var(--servicesBorder);
    border-radius: 2rem;
    backdrop-filter: blur(1px);
    img {
      width: 100%;
    }
    &-info {
      padding: 0 2.5rem 2rem;
      @media screen and (max-width: 900px) {
        padding: 0 1rem 1rem;
      }
      p {
        font-size: 2rem;
        line-height: 2.43rem;
        @media screen and (max-width: 1200px) {
          font-size: 1.8rem;
        }
        @media screen and (max-width: 900px) {
          font-size: 1.6rem;
        }
      }
    }
  }
`;
