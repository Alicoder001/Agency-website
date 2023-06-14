import React, { useState } from "react";
import { ContactStyled } from "./Contact.Styled";
import achchiq from "../../images/png/achchiq.png";
import Button from "../Button/Button";
import UseMainContext from "../../hooks/UseMainContext";
const Contact = () => {
  const randomm = () => {
    return Math.trunc(Math.random() * 10 ** 8);
  };
  const { checkF } = UseMainContext();
  const [checkData, setCheckData] = useState([
    { name: "Backend", id: randomm(), checked: false },
    { name: "CRM ishlab chiqish", id: randomm(), checked: false },
    { name: "Internet magazin ishlab chiqish", id: randomm(), checked: false },
    { name: "Logotip va Brandbook", id: randomm(), checked: false },
    { name: "Portal ishlab chiqish", id: randomm(), checked: false },
    { name: "Veb dizayn", id: randomm(), checked: false },
    { name: "Mobilograf", id: randomm(), checked: false },
    { name: "Frontend", id: randomm(), checked: false },
    { name: "Grafik dizayn", id: randomm(), checked: false },
    { name: "Motion dizayn", id: randomm(), checked: false },
    { name: "Mobil ilova ishlab chiqish", id: randomm(), checked: false },
    { name: "Veb sayt ishlab chiqish", id: randomm(), checked: false },
    { name: "SMM dizayn", id: randomm(), checked: false },
  ]);
  // const checkF = (id, setData, key) => {
  //   setData((data) => {
  //     return data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, [key]: !item[key] };
  //       } else {
  //         return item;
  //       }
  //     });
  //   });
  // };
  return (
    <ContactStyled id="contact">
      <div className=" contact-container">
        <form action="">
          <h2>
            Sizni bir finjon qahva ustida loyihangizni batafsil muhokama
            qilishga mamnuniyat ila taklif qilamiz.
          </h2>
          <div className="formBlock">
            <div className="inputBlock">
              <input type="text" placeholder="Ismingiz" />
            </div>
            <div className="inputBlock">
              <input type="text" placeholder="Telefon raqamingiz" />
            </div>
            <div className="inputBlock">
              <input
                type="text"
                placeholder="G'oyangiz xaqida qisqacha (Muhim emas)"
              />
            </div>
          </div>
          <h3>Qanday xizmatlardan foydalanishni xoxlaysiz?</h3>
          <div className="checkBlock">
            {checkData.map((item) => {
              return (
                <div
                  key={item.id}
                  data-toggle={"checked"}
                  onClick={(e) => {
                    checkF(
                      item.id,
                      setCheckData,
                      e.currentTarget.getAttribute("data-toggle")
                    );
                  }}
                  className="checkWrap"
                >
                  <div className="chekbox checked">
                    {item.checked && <span className="checkedItem"></span>}
                  </div>
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </form>
        <div className="drink">
          <div className="drinkWrap">
            <h3>NIMANI MA'QUL KO'RASIZ?</h3>
            <div className="drinkBlock">
              <div>
                <img src={achchiq} alt="" />
                <h4>Achchiq kofe</h4>
              </div>
              <div>
                <img src={achchiq} alt="" />
                <h4>Achchiq kofe</h4>
              </div>
              <div>
                <img src={achchiq} alt="" />
                <h4>Achchiq kofe</h4>
              </div>
              <div>
                <img src={achchiq} alt="" />
                <h4>Achchiq kofe</h4>
              </div>
            </div>
          </div>
          <Button name={"Mijoz bo’lish"} />
        </div>
      </div>
    </ContactStyled>
  );
};

export default Contact;
