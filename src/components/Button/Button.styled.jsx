import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 19.6rem;
  height: 7rem;
  background: transparent;
  color: #6911ad;
  position: relative;
  font-size: 1.8rem;
  font-weight: 700;
  border-radius: 14.1rem;
  border: none;
  &:hover {
    cursor: pointer;
  }
  .btnWrap {
    top: 0;
    transition: 0.7s;
    position: absolute;
    background: #6911ad;
    transform: translate(0, -1.6rem);
    width: 7rem;
    height: 100%;
    border-radius: 14.1rem;
  }
  &:hover .btnWrap {
    width: 100%;
    transform: translate(0, 0);
  }

  p {
    color: white;
    mix-blend-mode: difference;
    z-index: 2;
    position: relative;
  }
`;
