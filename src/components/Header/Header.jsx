import React from "react";
import { Link } from "react-router-dom";
import { Link as Linkk } from "react-scroll";
import { HeaderStyled } from "./Header.styled";
import logoLight from "../../images/svg/logoHeaderLight.svg";
import sun from "../../images/svg/light.svg";
import SunLight from "../../images/svg/sunn.svg";
import moon from "../../images/svg/moon.svg";
import moonLight from "../../images/svg/moonLight.svg";
import burger from "../../images/svg/burger.svg";
import burgerLight from "../../images/svg/burgerLight.svg";
import trash from "../../images/svg/trash.svg";
import logoDark from "../../images/svg/mobileLogoDark.svg";
import useMainContext from "../../hooks/UseMainContext";
import { useState } from "react";

const Header = () => {
  const { changeMode, mode } = useMainContext();
  const [isShowNav, setIsShowNav] = useState(false);

  return (
    <HeaderStyled>
      <div className="header-container">
        <div className={`burger-block ${isShowNav && "visiblity"}`}>
          {mode === "dark" && (
            <img
              onClick={() => {
                setIsShowNav(!isShowNav);
              }}
              src={burger}
              alt="burger"
            />
          )}
          {mode === "light" && (
            <img
              onClick={() => {
                setIsShowNav(!isShowNav);
              }}
              src={burgerLight}
              alt="burger"
            />
          )}
        </div>
        <Link to={"/"} className={`logo ${isShowNav && "visiblity"}`}>
          {mode === "dark" && <img src={logoDark} alt="logo" />}
          {mode === "light" && <img src={logoLight} alt="logo" />}
        </Link>
        <nav className={`burger__nav ${!isShowNav && "showNav"}`}>
          <div className="burger__nav-header">
            <Link
              onClick={() => {
                setIsShowNav(false);
              }}
            >
              <img src={logoDark} alt="logo" />
            </Link>
            <img
              onClick={() => {
                setIsShowNav(!isShowNav);
              }}
              src={trash}
              className="trash"
              alt="trash"
            />
          </div>
          <div className="burger__nav-main">
            <div className="link-block">
              <Link
                onClick={() => {
                  setIsShowNav(false);
                }}
                className="nav__link"
                to={"/"}
              >
                Biz haqimizda
              </Link>
              <Link
                onClick={() => {
                  setIsShowNav(false);
                }}
                className="nav__link"
                to={"/portfolio"}
              >
                Portfolio
              </Link>
              <Link
                onClick={() => {
                  setIsShowNav(false);
                }}
                className="nav__link"
                to={"/services"}
              >
                Xizmatlarimiz
              </Link>
              <Linkk
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => {
                  setIsShowNav(false);
                }}
                className="nav__link"
                to={"contact"}
              >
                Buyurtma berish
              </Linkk>
            </div>
            <div
              onClick={() => {
                setIsShowNav(false);
              }}
              className="burger__nav-number"
            >
              <h1>(99) 999 9999</h1>
            </div>
          </div>
        </nav>
        <nav className="nav">
          <Link className="nav__link" to={"/"}>
            Biz haqimizda
          </Link>
          <Link className="nav__link" to={"/portfolio"}>
            Portfolio
          </Link>

          <Link className="nav__link" to={"/services"}>
            Xizmatlarimiz
          </Link>
          <Linkk
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="nav__link"
            to={"contact"}
          >
            Buyurtma berish
          </Linkk>
        </nav>
        <div className="activeBlock">
          <div
            onClick={() => {
              if (mode === "dark") {
                changeMode("light");
              } else if (mode === "light") {
                changeMode("dark");
              }
            }}
            className="mode"
          >
            {mode === "dark" && (
              <img className="img" src={sun} alt="light logo" />
            )}
            {mode === "light" && (
              <img className="img" src={SunLight} alt="light logo" />
            )}
            {mode === "dark" && (
              <img className="img" src={moon} alt="light logo" />
            )}
            {mode === "light" && (
              <img className="img" src={moonLight} alt="light logo" />
            )}

            <div className={`iconBg ${mode === "dark" && "modeRight"}`}></div>
          </div>
          <div
            onClick={() => {
              if (mode === "dark") {
                changeMode("light");
              } else if (mode === "light") {
                changeMode("dark");
              }
            }}
            className={`mode-mobile ${isShowNav && "visiblity"}`}
          >
            {mode === "light" && (
              <img className="img" src={SunLight} alt="light logo" />
            )}
            {mode === "dark" && (
              <img className="img" src={moon} alt="light logo" />
            )}
          </div>
          <div className="contact">
            <p className="contact-text contact-number">+998 90 777-77-77</p>
            <p className="contact-text">chotatam@gmail.com</p>
          </div>
          <button className="activeBlock-btn btn">Заказать звонок</button>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
