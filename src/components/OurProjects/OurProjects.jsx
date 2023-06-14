import React, { useState } from "react";
import { OurProjectsStyled } from "./OurProjects.styled";
import webSiteImg from "../../images/png/website.png";
import strelka from "../../images/svg/strelka.svg";
import Button from "../Button/Button";
import OurProjectsItem from "./OurProjectsItem/OurProjectsItem";
import UseMainContext from "../../hooks/UseMainContext";
const OurProjects = ({ isHome }) => {
  const randomm = () => {
    return Math.trunc(Math.random() * 10 ** 8);
  };
  const {checkF} = UseMainContext()
  const [navList, setNavlist] = useState([
    { name: "Barchasi", isActive: true, id: randomm() },
    { name: "Veb sayt", isActive: false, id: randomm() },
    { name: "Veb dizayn", isActive: false, id: randomm() },
    { name: "SMM", isActive: false, id: randomm() },
    { name: "Mobil ilova", isActive: false, id: randomm() },
  ]);
  let navListClone = [...navList];
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <OurProjectsStyled>
      <div className="project-container container">
        <h2>Bajargan loyihalarimiz</h2>
        <nav className="nav">
          {navListClone.map((item) => {
            const { isActive, id, name } = item;
            return (
              <p
                key={id}
                data-toggle = {'isActive'}
                onClick={(e) => {
                  checkF(id,setNavlist,e.currentTarget.getAttribute('data-toggle'))
                  
                }}
                className={`${isActive ? "active" : ""} nav-link`}
              >
                {name}
              </p>
            );
          })}
        </nav>
        <ul>
          {isHome
            ? array.slice(0, 6).map((i) => {
                return (
                  <OurProjectsItem
                    key={i}
                    text={"UYMAKON mobil ilovasi"}
                    mainImg={webSiteImg}
                    strel={strelka}
                  />
                );
              })
            : array.map((i) => {
                return (
                  <OurProjectsItem
                    key={i}
                    text={"UYMAKON mobil ilovasi"}
                    mainImg={webSiteImg}
                    strel={strelka}
                  />
                );
              })}
        </ul>
        {isHome && <Button name={"Barchasini ko’rish"} link={"portfolio"} />}
      </div>
    </OurProjectsStyled>
  );
};

export default OurProjects;
