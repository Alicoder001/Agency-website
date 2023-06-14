import React from "react";

const OurProjectsItem = ({ mainImg, strel, text }) => {
  return (
    <li>
      <div className="img-block">
        <img className="img" src={mainImg} alt="" />
        <p className="img-text">{text}</p>
        <img className="strelka" src={strel} alt="" />
      </div>
    </li>
  );
};

export default OurProjectsItem;
