import styled from "styled-components";

export const ContactStyled = styled.section`
  padding: 0 2rem;

  .contact-container {
    max-width: 140rem;
    width: 100%;
    margin: 0 auto;
    padding: 6rem 8rem;
    background: var(--servicesBg);
    border: var(--servicesBorder);
    backdrop-filter: blur(1px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    @media screen and (max-width: 1150px) {
      padding: 6rem 4rem;
    }
    @media screen and (max-width: 1050px) {
      flex-direction: column;
      align-items: center;
    }
    @media screen and (max-width: 650px) {
      padding: 2rem;
    }
  }
  form {
    max-width: 64rem;
    width: 100%;
    @media screen and (max-width: 1050px) {
      max-width: 100%;
      .formBlock {
        max-width: 100%;
      }
    }
  }
  h2 {
    font-weight: 600;
    font-style: italic;
    font-size: 3.2rem;
    margin-bottom: 4rem;
    line-height: 3.8rem;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
  .formBlock {
    max-width: 50rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-bottom: 4rem;
    input {
      width: 100%;
      color: white;
      font-size: 1.7rem;
      line-height: 2rem;
      font-weight: 400;
      background: transparent;
      border: none;
      margin-bottom: 0.8rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: var(--inputColor);
      }
    }
  }
  .inputBlock {
    border-bottom: 1px solid var(--inputColor);
  }
  h3 {
    margin-bottom: 4rem;
  }
  .checkBlock {
    display: grid;
    justify-content: space-between;
    row-gap: 3rem;
    grid-template-areas:
      "hello hello"
      "hello hello";
    @media screen and (max-width: 650px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    span {
      max-width: 17.8rem;
      margin-left: 1rem;
      font-size: 1.8rem;
      @media screen and (max-width: 650px) {
        max-width: none;
      }
    }
    .checkWrap {
      display: flex;
      align-items: center;
      transition: 0.5s;
      &:hover {
        cursor: pointer;
        scale: 1.05;
      }
    }
    .chekbox {
      width: 2rem;
      height: 2rem;
      border: 1px solid #aaa;
      border-radius: 4px;
      padding: 2px;
      flex-shrink: 0;
      span {
        margin: 0;
        max-width: none;
      }
    }
    .checked {
      border: 1px solid rgba(105, 17, 173, 0.7);
    }
    .checkedItem {
      background-color: rgb(105, 17, 173);
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 4px;
    }
  }
  .drink {
    margin-top: 5.6rem;
    max-width: 48.7rem;
    @media screen and (max-width: 1050px) {
      max-width: 100%;
    }
    h3 {
      @media screen and (max-width: 650px) {
        font-size: 1.6rem;
      }
    }
    width: 100%;
    .drinkWrap {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      padding: 4rem 6rem;
      background: rgba(83, 83, 83, 0.1);
      box-shadow: 20px 20px 40px rgba(241, 216, 253, 0.08);
      backdrop-filter: blur(2px);
      /* Note: backdrop-filter has minimal browser support */

      border-radius: 10px;
      margin-bottom: 2.5rem;
      @media screen and (max-width: 650px) {
        padding: 2.5rem 2rem;
      }
    }
    &Block {
      width: 100%;
      display: grid;
      grid-template-areas: "hello hello " "hello hello";
      gap: 6.6rem;

      div {
        text-align: center;
        img {
          margin-bottom: 1rem;
          @media screen and (max-width: 650px) {
            width: 8rem;
            height: 8rem;
          }
        }
      }
    }
  }
`;
