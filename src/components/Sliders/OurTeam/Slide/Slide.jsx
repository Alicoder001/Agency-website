import React from "react";
import { SlideStyled } from "./Slide.Styled";

const Slide = ({ img }) => {
  return (
    <SlideStyled>
      <img src={img} alt="img" />
      <div className="news-info">
        <h3>Saidalixon Sobirov</h3>
        <hr />
        <p>Frontend dasturchi</p>
      </div>
    </SlideStyled>
  );
};

export default Slide;
