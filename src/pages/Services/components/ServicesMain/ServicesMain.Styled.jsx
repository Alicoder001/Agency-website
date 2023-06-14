import styled from "styled-components";

export const ServicesMainStyled = styled.main`
  max-width: 101.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4.1rem;
  flex-shrink: 0;
  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
  section {
    border-radius: 2rem;
    background: var(--servicesBg);
    border: var(--servicesBorder);
  }
  .main-section {
    display: flex;
  }
  p {
    line-height: 3rem;
    letter-spacing: 2%;
  }
  .mainImg {
    width: 100%;
  }
  .services-info {
    padding: 4rem;
    @media screen and (max-width: 650px) {
      padding: 2rem;
    }
    h2 {
      margin-bottom: 2rem;
    }
    .subt-header {
      margin-bottom: 2.5rem;
    }
    .infoImg {
      margin-bottom: 2.5rem;
      width: 100%;
    }
    .subt-bottom {
      margin-bottom: 3rem;
    }
    hr {
      border: none;
      height: 1px;
      width: 100%;
      background-color: #989898;
    }
    .services-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 2rem;
    }
    .info-date {
      display: flex;
      gap: 1.4rem;
    }
    .shareBlock {
      display: flex;
      gap: 1.4rem;
    }
    .hashtags {
      display: flex;
      gap: 1rem;
      color: var(--servicesInfoFooter);
      @media screen and (max-width: 650px) {
        display: none;
      }
    }
  }
`;
