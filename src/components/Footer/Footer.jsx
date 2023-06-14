import React from "react";
import { FooterStyled } from "./Footer.Styled";
import logoDark from "../../images/svg/logoFooterDark.svg";
import logoFooterLight from "../../images/svg/logoFooterLight.svg";
import adresImg from "../../images/svg/adresImg.svg";
import adresImgDark from "../../images/svg/adresImgLight.svg";
import callIcon from "../../images/svg/callIcon.svg";
import callIconDark from "../../images/svg/callIconDark.svg";
import lightFBook from "../../images/svg/lightFBook.svg";
import lightFBookDark from "../../images/svg/lightFBookDark.svg";
import telegramLight from "../../images/svg/telegramLight.svg";
import telegramDark from "../../images/svg/telegramDark.svg";
import instagramLight from "../../images/svg/instagramLight.svg";
import instagramDark from "../../images/svg/instagramDark.svg";
import UseMainContext from "../../hooks/UseMainContext";
const Footer = () => {
  const { mode } = UseMainContext();
  return (
    <FooterStyled>
      <div className="footer-container container">
        <div className="logo">
          {mode === "dark" && <img src={logoDark} alt="logo" />}
          {mode === "light" && <img src={logoFooterLight} alt="logo" />}
        </div>
        <div className="address">
          {mode === "dark" && <img src={adresImg} alt="adress logo" />}
          {mode === "light" && <img src={adresImgDark} alt="adress logo" />}
          <div className="addressBlock">
            <p>Manzil: Toshkent shahri, Sergeli tumani, Navro’z ko’cha 3-uy.</p>
            <p>Mo’ljal: “ASIA AUTO” avtosalon ichki qismi</p>
          </div>
        </div>

        <div className="call">
          <div className="callBlock">
            {mode === "dark" && <img src={callIcon} alt="adress logo" />}
            {mode === "light" && <img src={callIconDark} alt="adress logo" />}
            <span>+998 99 999 99 99</span>
          </div>
          <div className="callBlock">
            {mode === "dark" && <img src={callIcon} alt="adress logo" />}
            {mode === "light" && <img src={callIconDark} alt="adress logo" />}
            <span>+998 99 999 99 99</span>
          </div>
        </div>
        <div className="social">
          {mode === "dark" && <img src={telegramLight} alt="" />}
          {mode === "light" && <img src={telegramDark} alt="" />}
          {mode === "dark" && <img src={lightFBook} alt="" />}
          {mode === "light" && <img src={lightFBookDark} alt="" />}
          {mode === "dark" && <img src={instagramLight} alt="" />}
          {mode === "light" && <img src={instagramDark} alt="" />}
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
