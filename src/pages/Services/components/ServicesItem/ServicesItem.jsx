import React from "react";
import { ServicesItemStyled } from "./ServicesItem.Styled";

const ServicesItem = ({ data }) => {
  return (
    <ServicesItemStyled>
      <ul className="itemList">
        {data.map((item) => {
          return (
            <li key={Math.random()} className="item">
              <img src={item.img} alt={item.text} />
              <div className="item-info">
                <p>{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </ServicesItemStyled>
  );
};

export default ServicesItem;
