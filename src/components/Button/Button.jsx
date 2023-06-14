import React from "react";
import { ButtonStyled } from "./Button.styled";
import { Link } from "react-router-dom";

const Button = ({ name, link }) => {
  return (
    <Link to={`/${link}`}>
      <ButtonStyled>
        <div className="btnWrap"></div>
        <p>{name}</p>
      </ButtonStyled>
    </Link>
  );
};

export default Button;
