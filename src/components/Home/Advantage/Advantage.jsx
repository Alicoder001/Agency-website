import React from "react";
import { AdvantageStyled } from "./Advantage.styled";
import individual from "../../../images/svg/individual.svg";
import expertisa from "../../../images/svg/expertisa.svg";
import racket from "../../../images/svg/racket.svg";
const Advantage = () => {
  return (
    <AdvantageStyled>
      <div className="container">
        <h2>Bizning afzalliklarimiz</h2>
        <ul>
          <li>
            <img src={individual} alt="" />
            <h3>Individual yondashuv</h3>
            <hr />
            <p className="gilroy">
              Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga
              javob beradigan echimlarni yaratamiz
            </p>
          </li>
          <li>
            <img src={expertisa} alt="" />
            <h3>Ekspertiza</h3>
            <hr />
            <p className="gilroy">
              Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga
              javob beradigan echimlarni yaratamiz
            </p>
          </li>
          <li>
            <img src={racket} alt="" />
            <h3>Professional xizmat</h3>
            <hr />
            <p className="gilroy">
              Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga
              javob beradigan echimlarni yaratamiz
            </p>
          </li>
          <li>
            <img src={individual} alt="" />
            <h3>Individual yondashuv</h3>
            <hr />
            <p className="gilroy">
              Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga
              javob beradigan echimlarni yaratamiz
            </p>
          </li>
          <li>
            <img src={expertisa} alt="" />
            <h3>Ekspertiza</h3>
            <hr />
            <p className="gilroy">
              Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga
              javob beradigan echimlarni yaratamiz
            </p>
          </li>
          <li>
            <img src={racket} alt="" />
            <h3>Professional xizmat</h3>
            <hr />
            <p className="gilroy">
              Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga
              javob beradigan echimlarni yaratamiz
            </p>
          </li>
        </ul>
      </div>
    </AdvantageStyled>
  );
};

export default Advantage;
