import React from "react";
import { ServicesStyled } from "./Services.Styled";
import ServicesMain from "./components/ServicesMain/ServicesMain";
import ServicesItem from "./components/ServicesItem/ServicesItem";
import itPark from "../../images/png/itPark.png";
import itParkMeet from "../../images/png/itParkMeet.png";
import dizaynor from "../../images/png/dizaynor.png";
const Services = () => {
  const itemInfo = [
    { text: "Dizaynni o'rgangandan keyin nima qilish kerak?", img: dizaynor },
    { text: "Dizaynni o'rgangandan keyin nima qilish kerak?", img: dizaynor },
    { text: "Dizaynni o'rgangandan keyin nima qilish kerak?", img: dizaynor },
    { text: "Dizaynni o'rgangandan keyin nima qilish kerak?", img: dizaynor },
  ];
  return (
    <ServicesStyled>
      <div className="services-container">
        <ServicesMain mainImg={itPark} infoImg={itParkMeet} />
        <ServicesItem data={itemInfo} />
      </div>
    </ServicesStyled>
  );
};

export default Services;
