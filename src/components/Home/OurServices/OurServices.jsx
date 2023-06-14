import React from "react";
import { OurServicesStyled } from "./OurServices.styled";
import serviceWeb from "../../../images/svg/serviceWeb.svg";
const OurServices = () => {
  return (
    <OurServicesStyled>
      <div className="service-container">
        <div className="block">
          <h2>Bizning xizmatlar</h2>
          <ul className="nunito">
            <li>
              <img src={serviceWeb} alt="" />
              <h3>Veb saytlar</h3>
              <p>
                Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating.
              </p>
            </li>
            <li>
              <img src={serviceWeb} alt="" />
              <h3>Veb saytlar</h3>
              <p>
                Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating.
              </p>
            </li>
            <li>
              <img src={serviceWeb} alt="" />
              <h3>Veb saytlar</h3>
              <p>
                Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating.
              </p>
            </li>{" "}
            <li>
              <img src={serviceWeb} alt="" />
              <h3>Veb saytlar</h3>
              <p>
                Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating.
              </p>
            </li>
            <li>
              <img src={serviceWeb} alt="" />
              <h3>Veb saytlar</h3>
              <p>
                Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating.
              </p>
            </li>
            <li>
              <img src={serviceWeb} alt="" />
              <h3>Veb saytlar</h3>
              <p>
                Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </OurServicesStyled>
  );
};

export default OurServices;
