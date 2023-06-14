import React from "react";
import { NewsStyled } from "./News.Styled";

import Slider from "../../Sliders/News/Slider/Slider";

const News = () => {
  return (
    <NewsStyled>
      <div className="news-container">
        <h2>Blog yangiliklarimiz</h2>
        <Slider />
      </div>
    </NewsStyled>
  );
};

export default News;
