import React from "react";
import { SlideStyled } from "./Slide.Styled";

const Slide = ({ img }) => {
  return (
    <SlideStyled>
      <img src={img} alt="img" />
      <div className="news-info">
        <h4>«QA» mutaxassisi qanday bo'lishi kerak?</h4>
        <p className="news-subt gilroy">
          🔥 Ma'lumki, «Najot Ta'lim»dagi kurslar qatoriga «QA», ya'ni «Dasturiy
          ta'minotni testlash» kursi ham qo'shilgan.
        </p>
        <footer>
          <div className="hashtags gilroy">
            <span className="hashtag">#hi_tech</span>
          </div>
          <span className="date gilroy">14:45 22/02/23</span>
        </footer>
      </div>
    </SlideStyled>
  );
};

export default Slide;
